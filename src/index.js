require('dotenv').config();

const Twitter = require('twitter');
const axios = require('axios');
const fm = require('front-matter');
const { readdirSync, readFileSync } = require('fs');
const config = require('./config.js');

const generateImage = async (code) => {
  const { data } = await axios.post('https://carbonara.now.sh/api/cook', {
    code,
    backgroundColor: '#4A90E2',
    paddingHorizontal: '20px',
    paddingVertical: '20px',
    theme: 'one dark',
  }, {
    responseType: 'arraybuffer',
  });

  return Buffer.from(data);
};

const getRandomSnippet = () => {
  const snippets = readdirSync('./snippets/');
  const randomSnippetFilename = snippets[Math.floor(Math.random() * snippets.length)];
  const markdown = readFileSync(`./snippets/${randomSnippetFilename}`, 'utf-8');

  const parsed = fm(markdown);

  return {
    text: parsed.attributes.description,
    body: parsed.body,
  };
};

const handler = async (event, context, callback) => {
  const client = new Twitter(config);

  const { text, body } = getRandomSnippet();
  const media = await generateImage(body);

  client.post('media/upload', { media }, (error, m) => {
    if (!error) {
      const status = {
        status: text,
        media_ids: m.media_id_string,
      };

      client.post('statuses/update', status, () => callback(null, {
        statusCode: 200,
        body: 'html',
      }));
    }

    return callback(null, {
      statusCode: 200,
      body: 'html',
    });
  });
};

module.exports = {
  handler,
  generateImage,
  getRandomSnippet,
};
