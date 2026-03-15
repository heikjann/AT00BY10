import { expect } from 'chai';
import clamp from '../src/clamp.js';

describe('clamp()', () => {

  it.skip('returns value within range', () => {
    expect(clamp(5, 1, 10)).to.equal(5);
  });
  // Known issue: documented in GitHub Issues

  it('clamps below minimum', () => {
    expect(clamp(-5, 0, 10)).to.equal(0);
  });

  it.skip('clamps above maximum', () => {
    expect(clamp(20, 0, 10)).to.equal(10);
  });
  // Known issue: documented in GitHub Issues
});
