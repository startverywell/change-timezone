const regexChecks = require('../src/regex-checks');

var assert = require('assert');

describe('Testing the regexChecks module', function () {
  describe('getDateTime()', function () {
    describe('returns the DateTime value of the format', function () {
      it('YYYY-MM-DD HH:mm:ss', function () {
        assert.strictEqual(regexChecks.getDateTime('2021-01-01 19:00:00'), '2021-01-01 19:00:00');
      });
    });
  });

  describe('getTimeZoneAbbrev()', function () {
    describe('returns the TimeZone abbreviation value of', function () {
      it('2 to 5 letters', function () {
        assert.strictEqual(regexChecks.getTimeZoneAbbrev('2021-01-01 19:00:00 PT'), 'PT');
        assert.strictEqual(regexChecks.getTimeZoneAbbrev('2021-01-01 19:00:00.123 UTC'), 'UTC');
        assert.strictEqual(regexChecks.getTimeZoneAbbrev('2021-01-01 19:00:00 AEST'), 'AEST');
        assert.strictEqual(regexChecks.getTimeZoneAbbrev('2021-01-01 19:00:00 AESTS'), 'AESTS');
      });

      it('an offset (2 or 4 numbers)', function () {
        assert.strictEqual(regexChecks.getTimeZoneAbbrev('2021-01-01 19:00:00 +12'), '+12');
        assert.strictEqual(regexChecks.getTimeZoneAbbrev('2021-01-01 19:00:00 -12'), '-12');
        assert.strictEqual(regexChecks.getTimeZoneAbbrev('2021-01-01 19:00:00 +1230'), '+1230');
        assert.strictEqual(regexChecks.getTimeZoneAbbrev('2021-01-01 19:00:00 -1230'), '-1230');
      });
    });
  });

  describe('hasDateTime()', function () {
    describe('returns true if the regex format exists', function () {
      it('YYYY-MM-DD HH:mm:ss', function () {
        assert.strictEqual(regexChecks.hasDateTime('2021-01-01 19:00:00'), true);
      });
      it('YYYY-MM-DD HH:mm', function () {
        assert.strictEqual(regexChecks.hasDateTime('2021-01-01 19:00'), true);
      });
    });
    describe('returns false if the regex format does not exist', function () {
      it('YYYY-MM-DD HH:mm:ss or YYYY-MM-DD HH:mm', function () {
        assert.strictEqual(regexChecks.hasDateTime('2021-01-01 19-00-00'), false);
        assert.strictEqual(regexChecks.hasDateTime('2021 01 01 19:00'), false);
        assert.strictEqual(regexChecks.hasDateTime('ABC'), false);
        assert.strictEqual(regexChecks.hasDateTime(''), false);
      });
    });
  });
});
