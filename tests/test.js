const { describe, it } = require('mocha');
const { expect } = require('chai');
const { readFileSync } = require('fs');
const { generateImage, getRandomSnippet } = require('../src');
const getSnippets = require('../src/getSnippets');
const generateColorScheme = require('../src/generateColorScheme');

describe('Test Suite', () => {
  it('should pick a random snippet to tweet', () => {
    const set = new Set([
      getRandomSnippet().text,
      getRandomSnippet().text,
      getRandomSnippet().text,
    ]);

    expect(set.size).to.be.greaterThan(1);
  });

  it('should generate a code screenshot of the given text', async () => {
    const image = await generateImage('YOLO');

    expect(typeof image).to.eql('object');
  });

  it('should parse code block into snippets', () => {
    const markdownSnippets = readFileSync('./src/snippets.md', 'utf-8');

    const numberOfCodeBlock = markdownSnippets.split('```js').length - 1;
    const numberOfSnippets = getSnippets().length;

    expect(numberOfCodeBlock).to.eql(numberOfSnippets);
  });

  it('should end with a code block and blank line in snippets.md', () => {
    const markdownSnippets = readFileSync('./src/snippets.md', 'utf-8');

    const lines = markdownSnippets.split('\n');

    const last = lines[lines.length - 1];
    const secondLast = lines[lines.length - 2];

    expect(last).to.eql('');
    expect(secondLast).to.eql('```');
  });

  it('should find minimum one hashtag in every snippet', () => {
    expect(getSnippets().every(({ text }) => text.includes('#'))).to.eql(true);
  });

  it('should have a text value', () => {
    expect(getSnippets().every(({ text }) => text.length)).to.eql(true);
  });

  it('should have a code block', () => {
    expect(getSnippets().every(({ code }) => code.length)).to.eql(true);
  });

  it('should generate a color scheme', () => {
    const set = new Set([
      generateColorScheme(),
      generateColorScheme(),
      generateColorScheme(),
    ]);

    expect(set.size).to.be.greaterThan(1);
  });
});
