const { describe, it } = require('mocha');
const { expect } = require('chai');
const { getRandomSnippet } = require('../src');

describe('Test Suite', () => {
  it('should pick a random snippet to tweet', () => {
    const first = getRandomSnippet();
    const second = getRandomSnippet();

    expect(first.body).not.to.eql(second.body);
  });
});
