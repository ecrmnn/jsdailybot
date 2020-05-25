const { describe, it } = require('mocha');
const { expect } = require('chai');
const fm = require('front-matter');
const { readFileSync, readdirSync } = require('fs');
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

  it('should be able to parse all snippets', () => {
    readdirSync('./snippets/')
      .map((filename) => readFileSync(`./snippets/${filename}`, 'utf-8'))
      .forEach((content) => {
        const parsed = fm(content);

        expect(parsed.attributes).to.have.property('description');
        expect(parsed.attributes.description.length).to.be.greaterThan(20);
        expect(parsed.body.length).to.be.greaterThan(20);
        expect(parsed.bodyBegin).to.eql(4);
        expect(parsed.attributes.description.includes('#')).to.eql(true);
      });
  });

  it('should generate a code screenshot of the given text', async () => {
    const image = await generateImage('YOLO');

    expect(typeof image).to.eql('object');
  });
});
