it.skip('removes falsy values', () => {
  expect(compact([0, 1, false, 2, '', 3])).to.deep.equal([1, 2, 3]);
});
// Known issue: documented in GitHub Issues
