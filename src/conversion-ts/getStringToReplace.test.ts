import assert from 'assert';
import getStringToReplace from './getStringToReplace';

describe('Should return the Date Time strings we support converting', function () {
  it('YYYY-MM-DD HH:MM:SS', function () {
    assert.deepStrictEqual(getStringToReplace('2021-01-01 19:00:00'), '2021-01-01 19:00:00');
  });

  it('YYYY-MM-DD HH:MM', function () {
    assert.deepStrictEqual(getStringToReplace('2021-01-01 19:00'), '2021-01-01 19:00');
  });

  it('YYYY-MM-DD HH:MM:SS AB', function () {
    assert.deepStrictEqual(getStringToReplace('2021-01-01 19:00:00 PT'), '2021-01-01 19:00:00 PT');
  });

  it('YYYY-MM-DD HH:MM:SS ABC', function () {
    assert.deepStrictEqual(getStringToReplace('2021-01-01 19:00:00 PDT'), '2021-01-01 19:00:00 PDT');
  });

  it('YYYY-MM-DD HH:MM:SS ABCD', function () {
    assert.deepStrictEqual(getStringToReplace('2021-01-01 19:00:00 AEDT'), '2021-01-01 19:00:00 AEDT');
  });

  it('YYYY-MM-DD HH:MM:SS.123 ABC', function () {
    assert.deepStrictEqual(getStringToReplace('2021-01-01 19:00:00.123 UTC'), '2021-01-01 19:00:00.123 UTC');
  });

  it('YYYY-MM-DD HH:MM:SS +12', function () {
    assert.deepStrictEqual(getStringToReplace('2021-01-01 19:00:00 +12'), '2021-01-01 19:00:00 +12');
  });

  it('YYYY-MM-DD HH:MM:SS -12', function () {
    assert.deepStrictEqual(getStringToReplace('2021-01-01 19:00:00 -12'), '2021-01-01 19:00:00 -12');
  });

  it('YYYY-MM-DD HH:MM:SS +1234', function () {
    assert.deepStrictEqual(getStringToReplace('2021-01-01 19:00:00 +1230'), '2021-01-01 19:00:00 +1230');
  });

  it('YYYY-MM-DD HH:MM:SS +1234', function () {
    assert.deepStrictEqual(getStringToReplace('2021-01-01 19:00:00 -1230'), '2021-01-01 19:00:00 -1230');
  });

  it('YYYY-MM-DDTHH:MM:SS', function () {
    assert.deepStrictEqual(getStringToReplace('2021-01-01T19:00:00'), '2021-01-01T19:00:00');
  });
});

describe('Should return the Date Time strings we support converting given padded strings', function () {
  it('text YYYY-MM-DD HH:MM:SS text', function () {
    assert.deepStrictEqual(getStringToReplace('text 2021-01-01 19:00:00 text'), '2021-01-01 19:00:00');
  });

  it('text YYYY-MM-DD HH:MM text', function () {
    assert.deepStrictEqual(getStringToReplace('text 2021-01-01 19:00 text'), '2021-01-01 19:00');
  });

  it('text YYYY-MM-DD HH:MM:SS AB text', function () {
    assert.deepStrictEqual(getStringToReplace('text 2021-01-01 19:00:00 PT text'), '2021-01-01 19:00:00 PT');
  });

  it('text YYYY-MM-DD HH:MM:SS ABC text', function () {
    assert.deepStrictEqual(getStringToReplace('text 2021-01-01 19:00:00 PDT text'), '2021-01-01 19:00:00 PDT');
  });

  it('text YYYY-MM-DD HH:MM:SS ABCD text', function () {
    assert.deepStrictEqual(getStringToReplace('text 2021-01-01 19:00:00 AEDT text'), '2021-01-01 19:00:00 AEDT');
  });

  it('text YYYY-MM-DD HH:MM:SS.123 ABC text', function () {
    assert.deepStrictEqual(getStringToReplace('text 2021-01-01 19:00:00.123 UTC text'), '2021-01-01 19:00:00.123 UTC');
  });

  it('text YYYY-MM-DD HH:MM:SS +12 text', function () {
    assert.deepStrictEqual(getStringToReplace('text 2021-01-01 19:00:00 +12 text'), '2021-01-01 19:00:00 +12');
  });

  it('text YYYY-MM-DD HH:MM:SS -12 text', function () {
    assert.deepStrictEqual(getStringToReplace('text 2021-01-01 19:00:00 -12 text'), '2021-01-01 19:00:00 -12');
  });

  it('text YYYY-MM-DD HH:MM:SS +1234text ', function () {
    assert.deepStrictEqual(getStringToReplace('text 2021-01-01 19:00:00 +1230 text'), '2021-01-01 19:00:00 +1230');
  });

  it('text YYYY-MM-DD HH:MM:SS +1234 text', function () {
    assert.deepStrictEqual(getStringToReplace('text 2021-01-01 19:00:00 -1230 text'), '2021-01-01 19:00:00 -1230');
  });

  it('text YYYY-MM-DDTHH:MM:SS text', function () {
    assert.deepStrictEqual(getStringToReplace('text 2021-01-01T19:00:00 text'), '2021-01-01T19:00:00');
  });
});

describe('Should not return Date Time strings', function () {
  it('YYY-MM-DD HH:MM:SS', function () {
    assert.deepStrictEqual(getStringToReplace('021-01-01 19:00:00'), null);
  });

  it('ABCD-EF-GH 12:34:56', function () {
    assert.deepStrictEqual(getStringToReplace('ABCD-EF-GH 12:34:56'), null);
  });

  it('ABCD EF GH 12 34 56', function () {
    assert.deepStrictEqual(getStringToReplace('ABCD EF GH 12 34 56'), null);
  });

  it('1234 56 78 12 34 56', function () {
    assert.deepStrictEqual(getStringToReplace('1234 56 78 12 34 56'), null);
  });

  it('1234_56_78 12:34:56', function () {
    assert.deepStrictEqual(getStringToReplace('1234_56_78 12:34:56'), null);
  });
});
