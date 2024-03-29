require('dotenv').config();

const Twitter = require('twitter');
const axios = require('axios');
const getSnippets = require('./getSnippets');
const generateColorScheme = require('./generateColorScheme');
const config = require('./config');

const generateImage = async (code) => {
  const { data } = await axios.post('https://carbonara.now.sh/api/cook', {
    code,
    ...generateColorScheme(),
  }, {
    responseType: 'arraybuffer',
  });

  return Buffer.from(data);
};

const getRandomSnippet = () => {
  const snippets = getSnippets();
  const random = snippets[Math.floor(Math.random() * snippets.length)];

  return random;
};

const handler = async (event, context, callback) => {
  const client = new Twitter(config);

  const { text, code } = getRandomSnippet();
  const media = await generateImage(code);

  client.post('media/upload', { media }, (error, m) => {
    if (!error) {
      const status = {
        status: text,
        media_ids: m.media_id_string,
      };

      client.post('statuses/update', status, (err) => {
        // eslint-disable-next-line
        console.log(err);

        return callback(null, {
          statusCode: 200,
          body: 'html',
        });
      });
    } else {
      // eslint-disable-next-line
      console.log(error);
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
