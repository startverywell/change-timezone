const momentInterface = require('../src/moment-interface.js');

const { convertUnixTimeToNewDateTime } = require('../src/popup/js/script.js');

var assert = require('assert');

describe('Testing moment interface conversions', function () {
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
  describe('convertTimeStampToDate()', function () {
    describe('from Unix Epoch Time to Date Time', function () {
      it('0000000000 to Jan 01 1970 12am', function () {
        assert.strictEqual(
          momentInterface.convertTimeStampToDate('0000000000', 'Etc/UTC'),
          '1970-01-01 00:00:00'
        );
      });
      it('1767225600 to Jan 01 2026 12am', function () {
        assert.strictEqual(
          momentInterface.convertTimeStampToDate('1767225600', 'Etc/UTC'),
          '2026-01-01 00:00:00'
        );
      });
    });
  });

  describe('convertDateToTimeStamp()', function () {
    describe('from Date Time to Unix Epoch Time', function () {
      it('Jan 01 1970 12am to 0000000000', function () {
        assert.strictEqual(
          JSON.stringify(
            momentInterface.convertDateToTimeStamp('1970-01-01T00:00:00.000Z')
          ),
          '0'
        );
      });
      it('Jan 01 2026 12am to 1767225600', function () {
        assert.strictEqual(
          JSON.stringify(
            momentInterface.convertDateToTimeStamp('2026-01-01T00:00:00.000Z')
          ),
          '1767225600'
        );
      });
    });
  });

  describe('convertDateTimeWithZoneNameToUnixTime()', function () {
    describe('from Date Time to UnixTime', function () {
      it('2021-01-01 00:00:00 Los Angeles time', function () {
        assert.strictEqual(
          JSON.stringify(
            momentInterface.convertDateTimeWithZoneNameToUnixTime(
              '2021-01-01 00:00:00',
              'America/Los_Angeles'
            )
          ),
          '1609488000'
        );
      });
    });
  });
  describe('convertUnixTimeToNewDateTime()', function () {
    describe('returns a converted date time and unix value', function () {
      it('provided date time', function () {
        assert.deepStrictEqual(
          convertUnixTimeToNewDateTime('1609488000', 'America/Los_Angeles'),
          {
            dateTime: '2021-01-01 00:00:00',
            zoneName: 'PDT',
            unixTime: '1609488000',
          }
        );
      });
    });
  });
});

describe('Testing other moment interface functions', function () {
  describe('getZoneName()', function () {
    describe('returns the ZoneName', function () {
      it('UTC', function () {
        assert.strictEqual(momentInterface.getZoneName('Etc/UTC'), 'UTC');
      });
      it('PDT', function () {
        assert.strictEqual(
          momentInterface.getZoneName('America/Los_Angeles'),
          'PDT'
        );
      });
      it('AEDT', function () {
        assert.strictEqual(
          momentInterface.getZoneName('Australia/Canberra'),
          'AEDT'
        );
      });
    });
  });
});
