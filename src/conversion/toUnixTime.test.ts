import assert from 'assert';

import conversion from '.';

import { TimeZone } from './enums';

describe('Testing conversion lib', function () {
  it('Should return null because the string does not have a supported Date Time', function () {
    assert.deepStrictEqual(conversion.toUnixTime('No date here!', TimeZone['America/Los_Angeles']), null);
  });

  describe('Should return a Unix Time', function () {
    it('Given only a Date Time string', function () {
      assert.deepStrictEqual(conversion.toUnixTime('2021-01-01 00:00:00', TimeZone['America/Los_Angeles']), 1609488000);
    });

    it('Given a Date Time string with padding', function () {
      assert.deepStrictEqual(
        conversion.toUnixTime('test 2021-01-01 00:00:00 test', TimeZone['America/Los_Angeles']),
        1609488000
      );
    });
    it('Given a Date Time reverse', function () {
      assert.deepStrictEqual(
        conversion.toUnixTime('09:13:00 AM, Jun 15 2021', TimeZone['America/Los_Angeles']),
        1623773580
      );
    });
  });
});
