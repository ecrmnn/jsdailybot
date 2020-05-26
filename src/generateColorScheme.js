const attributes = {
  scheme: [{
    backgroundColor: '#4A90E2',
    theme: 'one dark',
  }, {
    backgroundColor: '#C43639',
    theme: 'one-light',
  }, {
    backgroundColor: '#E9DDF3',
    theme: 'dracula',
  }, {
    backgroundColor: '#5D645D',
    theme: 'night-owl',
  }, {
    backgroundColor: '#CFF5DA',
    theme: 'material',
  }],

  font: [
    'Fira Code',
    'Inconsola',
    'JetBrains Mono',
    'IBM Plex Mono',
    'MonoLisa',
    'Source Code Pro',
  ],

  lineHeight: [
    '150%',
    '160%',
    '170%',
    '180%',
  ],
};

const random = (prop) => attributes[prop][Math.floor(Math.random() * attributes[prop].length)];

module.exports = () => {
  const defaults = {
    paddingHorizontal: '20px',
    paddingVertical: '20px',
    exportSize: '2x',
  };

  return {
    ...defaults,
    ...random('scheme'),
    fontFamily: random('font'),
    lineHeight: random('lineHeight'),
  };
};
