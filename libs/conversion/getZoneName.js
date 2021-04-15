function getZoneName(target) {
  const timeZone = /(?:\s([A-Z\+\-]{1}[A-Z0-9]{1,4}))/.exec(target);
  return timeZone[1];
}
module.exports = { getZoneName };
