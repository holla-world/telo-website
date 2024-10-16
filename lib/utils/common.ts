import { random } from 'lodash-es';


export function sleep(time: number) {
  return new Promise((resolve: (v?: any) => void) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

export function resetUrlToOrigin(url: URL) {
  url.searchParams.delete('width');
  url.searchParams.delete('height');
  url.searchParams.delete('rate');
}

export function formatS3Image(
  src: string,
  w: number,
  h: number,
  q?: number | string
) {
  if (!src) {
    return null;
  }
  let dimensionConfig = [200, 300, 400, 600, 800, 1200];

  function getDimesion(value: number): number {
    let result: number = 0;
    for (let index = 0; index < dimensionConfig.length; index++) {
      result = dimensionConfig[index];
      if (value <= result) {
        break;
      }
    }
    return result;
  }

  function isIncludeCacheOrigin(origin: string) {
    return [
      'https://assets.ringo.cool',
    ].includes(origin);
  }

  try {
    let srcUrl;
    if (!src) {
      return '';
    }
    srcUrl = new URL(src);
    if (isIncludeCacheOrigin(srcUrl.origin)) {
      resetUrlToOrigin(srcUrl);
      let width = Math.floor(w);
      let height = Math.floor(h);
      let ratio = Math.max(1, Math.floor(window.devicePixelRatio));
      width = getDimesion(width * ratio);
      height = getDimesion(height * ratio);
      srcUrl.searchParams.append(
        'resize',
        `p_4` + (width ? `,w_${width}` : ``) + (height ? `,h_${height}` : ``)
      );
      if (q) {
        srcUrl.searchParams.append('Q', q.toString());
      }
      return `${srcUrl.origin}${decodeURIComponent(
        srcUrl.pathname
      )}${decodeURIComponent(srcUrl.search)}`;
    } else {
      return srcUrl.href;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

export function getMutipleRandom(max: number, length: number, min: number = 1) {
  let rangeLength = max - min + 1;
  if (length > rangeLength) {
    throw new Error('length must be less than max - min');
  }
  let result = new Set<number>();
  while (result.size < length) {
    let v = random(min, max);
    if (result.has(v)) {
      continue;
    }
    result.add(v);
  }
  return Array.from(result);
}
export function strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
}