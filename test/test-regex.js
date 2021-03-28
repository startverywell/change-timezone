const regex = require('../src/regex/regex');

var assert = require('assert');

describe('Testing the regex module', function () {
  describe('getDateTime()', function () {
    describe('returns the DateTime value of the format', function () {
      it('YYYY-MM-DD HH:mm:ss', function () {
        assert.strictEqual(
          regex.getDateTime('2021-01-01 19:00:00'),
          '2021-01-01 19:00:00'
        );
      });
    });
  });

  describe('getTimeZoneAbbrev()', function () {
    describe('returns the TimeZone abbreviation value of', function () {
      it('2 to 5 letters', function () {
        assert.strictEqual(
          regex.getTimeZoneAbbrev('2021-01-01 19:00:00 PT'),
          'PT'
        );
        assert.strictEqual(
          regex.getTimeZoneAbbrev('2021-01-01 19:00:00.123 UTC'),
          'UTC'
        );
        assert.strictEqual(
          regex.getTimeZoneAbbrev('2021-01-01 19:00:00 AEST'),
          'AEST'
        );
        assert.strictEqual(
          regex.getTimeZoneAbbrev('2021-01-01 19:00:00 AESTS'),
          'AESTS'
        );
      });

      it('an offset (2 or 4 numbers)', function () {
        assert.strictEqual(
          regex.getTimeZoneAbbrev('2021-01-01 19:00:00 +12'),
          '+12'
        );
        assert.strictEqual(
          regex.getTimeZoneAbbrev('2021-01-01 19:00:00 -12'),
          '-12'
        );
        assert.strictEqual(
          regex.getTimeZoneAbbrev('2021-01-01 19:00:00 +1230'),
          '+1230'
        );
        assert.strictEqual(
          regex.getTimeZoneAbbrev('2021-01-01 19:00:00 -1230'),
          '-1230'
        );
      });
    });
  });

  describe('hasDateTime()', function () {
    describe('returns true if the time format exists', function () {
      it('YYYY-MM-DD HH:mm:ss', function () {
        assert.strictEqual(regex.hasDateTime('2021-01-01 19:00:00'), true);
      });
      it('YYYY-MM-DD HH:mm', function () {
        assert.strictEqual(regex.hasDateTime('2021-01-01 19:00'), true);
      });
    });
    describe('returns false if the time format does not exist', function () {
      it('YYYY-MM-DD HH:mm:ss or YYYY-MM-DD HH:mm', function () {
        assert.strictEqual(regex.hasDateTime('2021-01-01 19-00-00'), false);
        assert.strictEqual(regex.hasDateTime('2021 01 01 19:00'), false);
        assert.strictEqual(regex.hasDateTime('ABC'), false);
        assert.strictEqual(regex.hasDateTime(''), false);
      });
    });
  });

  describe('hasUnixTime()', function () {
    describe('returns true if the unix format exists', function () {
      it('0000000000', function () {
        assert.strictEqual(regex.hasUnixTime('0000000000'), true);
      });
    });
  });
  describe('getUnixTime()', function () {
    describe('returns true if the unix format exists', function () {
      it('0000000000', function () {
        assert.strictEqual(regex.getUnixTime('0000000000'), '0000000000');
      });
    });
  });
});
