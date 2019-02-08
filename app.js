const tmi            = require('tmi.js'),
      config         = require('./lib/config'),
      messageHandler = require('./lib/message');

const options = {
  options: {
    debug: true
  },
  connection: {
    reconnect: true
  },
  identity: {
    username: config.TWITCH_USERNAME,
    password: config.TWITCH_PASSWORD
  },
  channels: ['#kenobi_sp']
};

const client = new tmi.client(options);

client.connect();

client.on('chat', (channel, user, message, self) => {

  messageHandler.handleMessage(client, channel, user, message, self);

});