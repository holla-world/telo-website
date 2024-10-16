import SVGA from 'svgaplayerweb';

let videoCache: any;
if (window._svgaPlayerCache) {
  videoCache = window._svgaPlayerCache;
} else {
  videoCache = window._svgaPlayerCache = {};
}

export default {
  get(url: string) {
    return videoCache[url];
  },
  set(url: string, data: any) {
    videoCache[url] = data;
  },
  load(url: string) {
    var parser = new SVGA.Parser();
    if (this.get(url)) {
      return Promise.resolve(this.get(url));
    }
    return new Promise((resolve) => {
      parser.load(
        url,
        (video) => {
          this.set(url, video);
          resolve(video);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  },
};
