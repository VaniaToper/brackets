module.exports = function check(str, bracketsConfig) {
  const open = bracketsConfig.map((i) => i[0]);
  const close = bracketsConfig.map((i) => i[1]);
  let arr = [];
  for (let i of str) {
    const openIndex = open.indexOf(i);
    const closeIndex = close.indexOf(i);
    if (closeIndex === openIndex) {
      if (arr[arr.length - 1] === open[openIndex]) {
        arr.pop();
      } else {
        arr.push(open[openIndex]);
      }
      continue
    }
    if (openIndex >= 0) {
      arr.push(openIndex);
      continue
    }
    if (closeIndex != arr.pop()) {
      return false;
    }
  }
  return !arr.length
};
