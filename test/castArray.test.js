import { expect } from 'chai';
import castArray from '../src/castArray.js';

describe('castArray()', () => {
  it('wraps value in array', () => {
    expect(castArray(1)).to.deep.equal([1]);
  });

  it('returns array as is', () => {
    expect(castArray([1, 2])).to.deep.equal([1, 2]);
  });
});
