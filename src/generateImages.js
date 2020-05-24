const axios = require('axios');
const { readdirSync, readFileSync, writeFileSync } = require('fs');

const codeSnippets = readdirSync('./snippets/code/');
const imageSnippets = readdirSync('./snippets/img/');

const codeWithoutImages = codeSnippets.filter((filename) => !imageSnippets.includes(`${filename}.png`));

codeWithoutImages.forEach(async (filename) => {
  const code = readFileSync(`./snippets/code/${filename}`, 'utf-8');

  const response = await axios.post('https://carbonara.now.sh/api/cook', { code }, { responseType: 'arraybuffer' });

  writeFileSync(`./snippets/img/${filename}.png`, Buffer.from(response.data));
});
