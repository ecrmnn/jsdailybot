const { describe, it } = require('mocha');
const { expect } = require('chai');
const { generateImage, getRandomSnippet } = require('../src');

describe('Test Suite', () => {
  it('should pick a random snippet to tweet', () => {
    const set = new Set([
      getRandomSnippet().body,
      getRandomSnippet().body,
      getRandomSnippet().body,
    ]);

    expect(set.size).to.be.greaterThan(1);
  });

  it('should generate a code screenshot of the given text', async () => {
    const image = await generateImage('YOLO');

    expect(typeof image).to.eql('object');
  });
});
