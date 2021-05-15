import assert from 'assert';

import toFormattedDateTimeZone from './toFormattedDateTimeZone';
describe('Testing conversion lib', function () {
  it('Should return a converted Date Time', function () {
    assert.deepStrictEqual(toFormattedDateTimeZone('1609488000', 'America/Los_Angeles'), '2021-01-01 00:00:00 PDT');
  });
});
