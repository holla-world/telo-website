import { getResource } from '@lib/fetch';

const cacheMap = new Map<string, string>();
const cachingMap = new Map<string, Promise<string>>();

export function formatCacheUrl(str: string) {
  try {
    let url = new URL(str);
    if (!url.searchParams.has('video_cache')) {
      url.searchParams.set('video_cache', '1');
      return url.href;
    }
    return str;
  } catch (error) {
    console.error(error);
    return str;
  }
}

export function preload(src: string): Promise<string> {
  if (cacheMap.has(src)) {
    return Promise.resolve(cacheMap.get(src) as string);
  }
  if (cachingMap.has(src)) {
    return cachingMap.get(src) as Promise<string>;
  }

  let defreed = getResource(
    src,
    {},
    {
      json: false,
    }
  )
    .then((res) => {
      return res.blob();
    })
    .then((blob: Blob) => {
      let objectUrl = URL.createObjectURL(blob);
      cacheMap.set(src, objectUrl);
      return objectUrl;
    })
    .finally(() => {
      cachingMap.delete(src);
    });
  cachingMap.set(src, defreed);
  return defreed;
}

export function get(src: string) {
  if (cacheMap.has(src)) {
    return cacheMap.get(src);
  } else {
    return src;
  }
}
