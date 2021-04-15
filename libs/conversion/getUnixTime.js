function getUnixTime(target) {
  const unixTime = /\d{10}/.exec(target);
  if (unixTime) {
    return unixTime[0];
  }
  return;
}
module.exports = { getUnixTime };
