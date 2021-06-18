import assert from 'assert';

import toDateTimeZone from './toDateTimeZone';

import { TimeZone } from './enums';

describe('Testing conversion lib', function () {
  it('Should return a converted Date Time', function () {
    assert.deepStrictEqual(toDateTimeZone(1609488000, TimeZone['America/Los_Angeles']), '2021-01-01 00:00:00 PDT');
  });
});
