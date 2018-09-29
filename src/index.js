module.exports = function getZerosCount(number) {
  let ZerosCount = 0;
  while (number > 0) {
    number = Math.trunc(number / 5);
    ZerosCount = ZerosCount + number;

  }
  return ZerosCount;
  }
