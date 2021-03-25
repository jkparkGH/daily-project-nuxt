import _ from 'lodash';

export function lineTextToHtml(value: string) {
  if (value) {
    return value.replace(/(?:\r\n|\r|\n|\/n|\/\n)/g, '<br />');
  } else {
    return '-';
  }
}

export function toCurrency(paramValue: number | string) {
  if (typeof paramValue === 'number' || typeof paramValue === 'string') {
    let minusCheck;
    if (paramValue.toString().indexOf('-') > -1) {
      minusCheck = true;
    } else {
      minusCheck = false;
    }
    let ints = paramValue.toString().split('.')[0];
    let floats = paramValue.toString().split('.')[1];
    let floatString = '';
    if (typeof floats !== 'undefined') {
      floatString = '.' + floats.slice(0, 2);
    }
    let value = parseInt(ints.toString().replace('-', '')) || 0;
    let crrArray = value
      .toString()
      .split('')
      .reverse();
    let result: Array<number | string> = [];
    _.forEach(crrArray, (item: number | string, index: number) => {
      result.push(item);
      if (index > 0 && index + 1 !== crrArray.length && (index + 1) % 3 === 0) {
        result.push(',');
      }
    });
    return (minusCheck ? '-' : '') + result.reverse().join('') + floatString;
  } else {
    return 0;
  }
}
