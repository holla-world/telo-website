export default function (source: string) {
  var URL = window.webkitURL || window.URL;
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', source, true);
    xhr.responseType = 'blob';

    xhr.onload = function () {
      if (xhr.status === 200 || xhr.status === 304) {
        var res = xhr.response;

        if (/iphone|ipad|ipod/i.test(navigator.userAgent)) {
          var fileReader = new FileReader();

          fileReader.onloadend = function () {
            var resultStr = fileReader.result?.toString() || '';
            var raw = atob(resultStr.slice(resultStr.indexOf(',') + 1));
            var buf = Array(raw.length);

            for (var d = 0; d < raw.length; d++) {
              buf[d] = raw.charCodeAt(d);
            }

            var arr = new Uint8Array(buf);
            var blob = new Blob([arr], {
              type: 'video/mp4',
            });
            resolve(URL.createObjectURL(blob));
          };

          fileReader.readAsDataURL(xhr.response);
        } else {
          resolve(URL.createObjectURL(res));
        }
      } else {
        reject(new Error('http response invalid' + xhr.status));
      }
    };

    xhr.send();
  });
}
