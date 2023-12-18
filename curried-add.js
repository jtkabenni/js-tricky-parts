function curriedAdd(total) {
  if (!total) {
    return 0;
  }
  return function addNum(num) {
    if (!num) return total;
    total += num;
    return addNum;
  };
}

module.exports = { curriedAdd };
