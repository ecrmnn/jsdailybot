const Twitter = require('twitter');
const { readFileSync } = require('fs');
const config = require('./config.js');

const client = new Twitter(config);

// Upload photo
const photo = readFileSync('../snippets/img/copy.js.png');

client.post('media/upload', { media: photo }, (error, media) => {
  if (!error) {
    const status = {
      status: 'I am a tweet',
      media_ids: media.media_id_string,
    };

    client.post('statuses/update', status, (tweetError, tweet) => {
      if (!tweetError) {
        // eslint-disable-next-line
        console.log(tweet);
      }
    });
  } else {
    // eslint-disable-next-line
    console.log(error);
  }
});
