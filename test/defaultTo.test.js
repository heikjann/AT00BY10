import { expect } from 'chai';
import defaultTo from '../src/defaultTo.js';

describe('defaultTo()', () => {
  it('returns default when value is null', () => {
    expect(defaultTo(null, 10)).to.equal(10);
  });

  it('returns value when not null', () => {
    expect(defaultTo(5, 10)).to.equal(5);
  });
});
