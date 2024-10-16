export default function Dict(options: Array<any>) {
  let result: any = {};

  let text = options.reduce((r, item) => {
    r[item.value] = item.text || item.value;
    return r;
  }, {});

  let value = options.reduce((r, item) => {
    if (item.alias) {
      r[item.alias] = item.value;
    }
    return r;
  }, {});

  result.text = text;
  result.value = value;
  result.options = options.filter((o) => o.option !== false);
  result.optionsByValue = function (values: any) {
    return result.options.filter((o: any) => values.includes(o.value));
  };
  result.textArray = function (value: any) {
    return value
      .split(',')
      .map((t: any) => {
        return text[t] || t;
      })
      .join(',');
  };
  return result;
}
