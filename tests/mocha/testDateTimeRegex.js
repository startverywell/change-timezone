const dateTimeRegex = require('../../libs/dateTimeRegex.js');

var assert = require('assert');

describe('Testing the dateTimeRegex module', function () {
  describe('getDateTime()', function () {
    describe('returns the DateTime value of the format', function () {
      it('YYYY-MM-DD HH:mm:ss', function () {
        assert.strictEqual(dateTimeRegex.getDateTime('2021-01-01 19:00:00'), '2021-01-01 19:00:00');
      });
    });
  });

  describe('getTimeZoneAbbrev()', function () {
    describe('returns the TimeZone abbreviation value of', function () {
      it('2 to 5 letters', function () {
        assert.strictEqual(dateTimeRegex.getTimeZoneAbbrev('2021-01-01 19:00:00 PT'), 'PT');
        assert.strictEqual(dateTimeRegex.getTimeZoneAbbrev('2021-01-01 19:00:00.123 UTC'), 'UTC');
        assert.strictEqual(dateTimeRegex.getTimeZoneAbbrev('2021-01-01 19:00:00 AEST'), 'AEST');
        assert.strictEqual(dateTimeRegex.getTimeZoneAbbrev('2021-01-01 19:00:00 AESTS'), 'AESTS');
      });

      it('an offset (2 or 4 numbers)', function () {
        assert.strictEqual(dateTimeRegex.getTimeZoneAbbrev('2021-01-01 19:00:00 +12'), '+12');
        assert.strictEqual(dateTimeRegex.getTimeZoneAbbrev('2021-01-01 19:00:00 -12'), '-12');
        assert.strictEqual(dateTimeRegex.getTimeZoneAbbrev('2021-01-01 19:00:00 +1230'), '+1230');
        assert.strictEqual(dateTimeRegex.getTimeZoneAbbrev('2021-01-01 19:00:00 -1230'), '-1230');
      });
    });
  });

  describe('hasDateTime()', function () {
    describe('returns true if the time format exists', function () {
      it('YYYY-MM-DD HH:mm:ss', function () {
        assert.strictEqual(dateTimeRegex.hasDateTime('2021-01-01 19:00:00'), true);
      });
      it('YYYY-MM-DD HH:mm', function () {
        assert.strictEqual(dateTimeRegex.hasDateTime('2021-01-01 19:00'), true);
      });
    });
    describe('returns false if the time format does not exist', function () {
      it('YYYY-MM-DD HH:mm:ss or YYYY-MM-DD HH:mm', function () {
        assert.strictEqual(dateTimeRegex.hasDateTime('2021-01-01 19-00-00'), false);
        assert.strictEqual(dateTimeRegex.hasDateTime('2021 01 01 19:00'), false);
        assert.strictEqual(dateTimeRegex.hasDateTime('ABC'), false);
        assert.strictEqual(dateTimeRegex.hasDateTime(''), false);
      });
    });
  });

  describe('hasUnixTime()', function () {
    describe('returns true if the unix format exists', function () {
      it('0000000000', function () {
        assert.strictEqual(dateTimeRegex.hasUnixTime('0000000000'), true);
      });
    });
  });
  describe('getUnixTime()', function () {
    describe('returns true if the unix format exists', function () {
      it('0000000000', function () {
        assert.strictEqual(dateTimeRegex.getUnixTime('0000000000'), '0000000000');
      });
    });
  });
});
