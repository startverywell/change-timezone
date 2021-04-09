const timeZoneRegex = require('../../libs/timeZoneRegex.js');

var assert = require('assert');

describe('Testing the timeZoneRegex module', function () {
  describe('getDateTime()', function () {
    describe('returns the DateTime value of the format', function () {
      it('YYYY-MM-DD HH:mm:ss', function () {
        assert.strictEqual(timeZoneRegex.getDateTime('2021-01-01 19:00:00'), '2021-01-01 19:00:00');
      });
    });
  });

  describe('getZoneName()', function () {
    describe('returns the TimeZone abbreviation value of', function () {
      it('2 to 5 letters', function () {
        assert.strictEqual(timeZoneRegex.getZoneName('2021-01-01 19:00:00 PT'), 'PT');
        assert.strictEqual(timeZoneRegex.getZoneName('2021-01-01 19:00:00.123 UTC'), 'UTC');
        assert.strictEqual(timeZoneRegex.getZoneName('2021-01-01 19:00:00 AEST'), 'AEST');
        assert.strictEqual(timeZoneRegex.getZoneName('2021-01-01 19:00:00 AESTS'), 'AESTS');
      });

      it('an offset (2 or 4 numbers)', function () {
        assert.strictEqual(timeZoneRegex.getZoneName('2021-01-01 19:00:00 +12'), '+12');
        assert.strictEqual(timeZoneRegex.getZoneName('2021-01-01 19:00:00 -12'), '-12');
        assert.strictEqual(timeZoneRegex.getZoneName('2021-01-01 19:00:00 +1230'), '+1230');
        assert.strictEqual(timeZoneRegex.getZoneName('2021-01-01 19:00:00 -1230'), '-1230');
      });
    });
  });

  describe('hasDateTime()', function () {
    describe('returns true if the time format exists', function () {
      it('YYYY-MM-DD HH:mm:ss', function () {
        assert.strictEqual(timeZoneRegex.hasDateTime('2021-01-01 19:00:00'), true);
      });
      it('YYYY-MM-DD HH:mm', function () {
        assert.strictEqual(timeZoneRegex.hasDateTime('2021-01-01 19:00'), true);
      });
    });
    describe('returns false if the time format does not exist', function () {
      it('YYYY-MM-DD HH:mm:ss or YYYY-MM-DD HH:mm', function () {
        assert.strictEqual(timeZoneRegex.hasDateTime('2021-01-01 19-00-00'), false);
        assert.strictEqual(timeZoneRegex.hasDateTime('2021 01 01 19:00'), false);
        assert.strictEqual(timeZoneRegex.hasDateTime('ABC'), false);
        assert.strictEqual(timeZoneRegex.hasDateTime(''), false);
      });
    });
  });

  describe('hasUnixTime()', function () {
    describe('returns true if the unix format exists', function () {
      it('0000000000', function () {
        assert.strictEqual(timeZoneRegex.hasUnixTime('0000000000'), true);
      });
    });
  });
  describe('getUnixTime()', function () {
    describe('returns true if the unix format exists', function () {
      it('0000000000', function () {
        assert.strictEqual(timeZoneRegex.getUnixTime('0000000000'), '0000000000');
      });
    });
  });
});
