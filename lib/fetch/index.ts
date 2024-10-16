import env from '@lib/env';
import { LogError, log } from './log';
import 'element-plus/theme-chalk/base.css';
import 'element-plus/theme-chalk/el-message.css';

export enum ApiOrigin {
  SHORT = 'SHORT',
}

interface RequstConfig {
  data: {
    [key: string]: any;
  };
  headers?: {
    [key: string]: string | number;
  };
  method?: string;
  isFilterNull?: boolean;
  cache?: RequestCache;
}

export type RequestOtherType = {
  headers?: object;
  signal?: AbortSignal;
  apiOrigin?: ApiOrigin;
  json?: boolean;
};

const SUCCESS_CODE = 0;
const timezone = (-(new Date().getTimezoneOffset() / 60)).toString();

export async function request(
  url: string,
  config: RequstConfig = { data: {} },
  other: RequestOtherType = {}
) {
  let headers = config.headers || {};

  if (config.isFilterNull === true) {
    Object.keys(headers).forEach((key) => {
      if (headers[key] === null || headers[key] === undefined) {
        delete headers[key];
      }
    });
    Object.keys(config.data).forEach((key) => {
      if (config.data[key] === null || config.data[key] === undefined) {
        delete config.data[key];
      }
    });
  }

  let fetchInit: Record<string, any> = {
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    method: config.method || 'POST',
    mode: 'cors' as RequestMode,
    signal: other.signal,
    cache: config.cache || 'default',
  };

  if (fetchInit.method === 'POST') {
    fetchInit.body = JSON.stringify(config.data) as BodyInit;
  } else if (fetchInit.method === 'GET') {
    let data = config.data;
    if (data && Object.keys(data).length > 0) {
      let search = Object.entries(data)
        .map(([key, val]) => `${key}=${val}`)
        .join('&');
      url = url + '?' + search;
    }
  }

  let res: Response;
  let errorParams = {
    url,
    data: JSON.stringify(config.data),
    headers: JSON.stringify(config.headers),
  };
  try {
    res = await fetch(url, fetchInit);
  } catch (error: any) {
    let logError = new LogError(error, {
      name: 'FetchError',
      source: 'FetchRequestError',
      params: errorParams,
      dedupe: false,
    });
    throw logError;
  }
  if (res.ok) {
    try {
      if (other.json === false) {
        return res;
      } else {
        let data = await res.json();
        return data;
      }
    } catch (error: any) {
      let logError = new LogError(error, {
        name: 'FetchError',
        source: 'FetchResponseJSONParseError',
        params: errorParams,
        dedupe: false,
      });
      throw logError;
    }
  } else {
    let logError = new LogError('Fetch ' + res.statusText, {
      name: 'FetchError',
      source: 'FetchResponseError',
      params: {
        ...errorParams,
        status: res.status,
        statusText: res.statusText,
      },
      dedupe: false,
    });
    throw logError;
  }
}

export function getResource(
  url: string,
  data: any = {},
  other: RequestOtherType = {}
) {
  return request(
    url,
    {
      headers: {
        'Content-Type': 'text/plain',
      },
      cache: 'force-cache',
      method: 'GET',
      data,
    },
    other
  );
}

async function middle(
  url: string,
  config: RequstConfig = {
    data: { token: env.token },
  },
  other: RequestOtherType = {}
) {
  // fetch url
  if (url.startsWith('http')) {
    url = url;
  } else {
    if (other.apiOrigin) {
      if (other.apiOrigin === ApiOrigin.SHORT) {
        url = import.meta.env.VITE_SHORT_API_ORIGIN + url;
      }
    } else {
      url = import.meta.env.VITE_API_ORIGIN + url;
    }
  }

  //  fetch data
  config.data = {
    token: env.token,
    ticket: env.ticket,
    ...config.data,
  };

  // fetch headers
  config.headers = {
    os: env.isAndroid ? 'android' : env.isiOS ? 'ios' : '',
    'app-version': env.appVersion || '',
    timezone,
    uid: <string>env.uid,
    'bundle-id': env.bundle || '',
    appid: env.appid || 'ringo',
    token: config.data.token,
    ticket: config.data.ticket
  };

  if (!env.isProduction) {
    config.headers['x-debug'] = 'true';
  }

  if (other.headers) {
    Object.assign(config.headers, { ...other.headers });
  }

  return request(url, config, other).then((json) => {
    if (json.result === SUCCESS_CODE) {
      let data = json.data;

      if (Object.keys(data).length === 0) {
        data = [];
      }
      return data;
    } else {
      let logError = new LogError(json.message, {
        name: 'ApiError',
        source: 'ApiError',
        params: {
          url,
          data: JSON.stringify(config.data),
          headers: JSON.stringify(config.headers),
          result: JSON.stringify(json),
        },
        dedupe: false,
        originError: json,
      });
      return Promise.reject(logError);
    }
  });
}

export function post(
  url: string,
  data: object = {},
  headers?: object,
  config?: RequstConfig
) {
  return middle(
    url,
    {
      method: 'POST',
      data,
      ...config,
    },
    { headers }
  );
}

export function postWithOther(
  url: string,
  data: object = {},
  other?: RequestOtherType
) {
  return middle(
    url,
    {
      method: 'POST',
      data,
    },
    other
  );
}

export function get(url: string, data: object = {}, config?: RequstConfig) {
  return middle(url, {
    method: 'GET',
    data,
    ...config,
  });
}

export function link(url: string, data?: { [key: string]: string | number }) {
  let path = url.startsWith('http')
    ? url
    : import.meta.env.VITE_API_ORIGIN + url;
  let linkUrl = new URL(path);
  if (data) {
    for (const key of Object.keys(data)) {
      let value = data[key];
      if (!(value === null || value === undefined || value === '')) {
        linkUrl.searchParams.append(key, value.toString());
      }
    }
  }
  if (!linkUrl.searchParams.get('token') && env.token) {
    linkUrl.searchParams.append('token', env.token);
  }
  return linkUrl.href;
}

function checkAndRemoveApiCache(maxSize: number) {
  let keys = Object.keys(window.localStorage);
  let apiKeys = keys.filter((key) => key.startsWith('ringo_api_'));

  apiKeys.sort((a, b) => {
    let aValue = JSON.parse(window.localStorage.getItem(a) || '{}');
    let bValue = JSON.parse(window.localStorage.getItem(b) || '{}');
    let aTimestamp = aValue.timestamp || 0;
    let bTimestamp = bValue.timestamp || 0;
    return aTimestamp - bTimestamp;
  });
  if (apiKeys.length > maxSize) {
    apiKeys
      .slice(0, apiKeys.length - maxSize)
      .forEach((k) => window.localStorage.removeItem(k));
  }
}

export function fetchWithConfig(
  url: string,
  data: { [key: string]: any } = {},
  config: {
    callback: (resData: any, isCache: boolean, isOnlyCache: boolean) => void;
    expired?: number;
    method?: 'POST' | 'GET';
    headers?: any;
    cacheApi?: boolean;
  }
) {
  let callback = config.callback;
  let cacheKey = 'ringo_api_' + Date.now();
  checkAndRemoveApiCache(20);

  if (config.cacheApi !== false) {
    let cacheValue = localStorage.getItem(cacheKey);
    if (cacheValue) {
      try {
        let cacheData = JSON.parse(cacheValue);
        let isCacheValid =
          cacheData.expiredTime && cacheData.expiredTime > Date.now();
        if (cacheData.resData) {
          callback(cacheData.resData, true, isCacheValid);
          if (isCacheValid) {
            return cacheData.resData;
          }
        } else {
          throw new Error(`fetch cache ${url} is null`);
        }
      } catch (error) {
        log(error);
      }
    }
  }

  return middle(url, {
    ...config,
    data,
  }).then((resData: any) => {
    try {
      if (resData) {
        checkAndRemoveApiCache(20);
        localStorage.setItem(
          cacheKey,
          JSON.stringify({
            expiredTime: config.expired ? Date.now() + config.expired : null,
            resData,
            timestamp: Date.now(),
          })
        );
      }
    } catch (error: any) {
      if (error?.message?.includes('exceeded the quota')) {
        // localstorage 超出上限
        console.error(error);
      } else {
        log(error);
      }
    }
    return callback(resData, false, false);
  });
}
