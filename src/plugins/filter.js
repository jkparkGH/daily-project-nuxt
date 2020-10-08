import Vue from "vue";

Vue.filter("lineTextToHtml", value => {
  if (value) {
    return value.replace(/(?:\r\n|\r|\n|\/n|\/\n)/g, "<br />");
  } else {
    return "-";
  }
});

Vue.filter("toCurrency", paramValue => {
  if (typeof paramValue === "number" || typeof paramValue === "string") {
    let minusCheck;
    if (paramValue.toString().indexOf("-") > -1) {
      minusCheck = true;
    } else {
      minusCheck = false;
    }
    let ints = paramValue.toString().split(".")[0];
    let floats = paramValue.toString().split(".")[1];
    let floatString = "";
    if (typeof floats !== "undefined") {
      floatString = "." + floats.slice(0, 2);
    }
    let value = parseInt(ints.toString().replace("-", "")) || 0;
    let crrArray = value
      .toString()
      .split("")
      .reverse();
    let result = [];
    _.forEach(crrArray, (item, index) => {
      result.push(item);
      if (index > 0 && index + 1 !== crrArray.length && (index + 1) % 3 === 0) {
        result.push(",");
      }
    });
    return (minusCheck ? "-" : "") + result.reverse().join("") + floatString;
  } else {
    return 0;
  }
});

// ref: https://github.com/vuejs/vuex/blob/dev/examples/shopping-cart/currency.js
Vue.filter("currency", (value, currency, decimals) => {
  value = parseFloat(value);
  if (!isFinite(value) || (!value && value !== 0)) return "";
  currency = currency != null ? currency : "$";
  decimals = decimals != null ? decimals : 2;
  let stringified = Math.abs(value).toFixed(decimals);
  let _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
  let i = _int.length % 3;
  let head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? "," : "") : "";
  let _float = decimals ? stringified.slice(-1 - decimals) : "";
  let sign = value < 0 ? "-" : "";
  return (
    sign +
    currency +
    head +
    _int.slice(i).replace(/(\d{3})(?=\d)/g, "$1,") +
    _float
  );
});
