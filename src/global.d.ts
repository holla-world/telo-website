interface Window {
  FlutterWebView: {
    postMessage: (message: string) => void;
  }
}