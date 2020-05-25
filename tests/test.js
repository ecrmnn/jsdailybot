const { describe, it } = require('mocha');
const { expect } = require('chai');
const { generateImage, getRandomSnippet } = require('../src');

describe('Test Suite', () => {
  it('should pick a random snippet to tweet', () => {
    const first = getRandomSnippet();
    const second = getRandomSnippet();

    expect(first.body).not.to.eql(second.body);
  });

  it('should generate a code screenshot of the given text', async () => {
    const image = await generateImage('YOLO');

    expect(typeof image).to.eql('object');
  });
});
