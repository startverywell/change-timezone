const momentInterface = require('../src/moment-interface.js');

var assert = require('assert');

describe('Testing conversions', function () {
  describe('convertDateTimeToNewTimeZone()', function () {
    describe('between Pacfic Time and Australian Eastern Time', function () {
      it('from Pacific Time', function () {
        assert.strictEqual(
          momentInterface.convertDateTimeToNewTimeZone(
            '2021-01-01 19:00:00',
            'America/Los_Angeles',
            'Australia/Canberra'
          ),
          '2021-01-02 14:00:00'
        );
      });
      it('from Australian Time', function () {
        assert.strictEqual(
          momentInterface.convertDateTimeToNewTimeZone(
            '2021-01-02 14:00:00',
            'Australia/Canberra',
            'America/Los_Angeles'
          ),
          '2021-01-01 19:00:00'
        );
      });
    });
  });
});
