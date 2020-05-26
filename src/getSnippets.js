const { readFileSync } = require('fs');

module.exports = () => (
  readFileSync('./src/snippets.md', 'utf-8')
    .split('-----')
    .filter(Boolean)
    .map((snippet) => {
      const textRE = /> (.+?)(?=\n```)/s;
      const codeRE = /```js\n(.+?)\n```/gs;

      const text = textRE.exec(snippet);
      const code = codeRE.exec(snippet);

      return {
        text: text[1],
        code: code[1],
      };
    })
);
