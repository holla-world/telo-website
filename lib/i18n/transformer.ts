export default function (origin: { [key: string]: string }, lang: string) {
  let message = { ...origin };
  for (const key of Object.keys(message)) {
    let value = message[key];
    if (lang === 'ar') {
      value = value.replace(
        /\{(\d)\}/gi,
        function (str: string, index: string) {
          return `{${parseInt(index) - 1}}`;
        }
      );
    } else {
      value = value.replace(/%\d%s/gi, function (str: string) {
        let index = parseInt((str.match(/\d+/) as string[])[0]);
        return `{${index - 1}}`;
      });
      value = value.replace('@', (str) => {
        return "{'@'}";
      });
    }
    message[key] = value;
  }
  return message;
}
