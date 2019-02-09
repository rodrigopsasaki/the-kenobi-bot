
const detector = require('./bot-detector'),
      commands = require('./commands');

class MessageHandler {

  static handleMessage(client, channel, user, message, self) {

    if (self) return;

    if (detector.isBot(user, message)) {
      MessageHandler.sendMessage(client, channel, `Bot Detected => ${user['display-name']}, message=${message}`);
    }

    if (message.startsWith('!')) {
      MessageHandler.handleCommands(client, channel, user, message);
    }
  }

  static handleCommands(client, channel, user, message) {
    commands.execute(client, channel, user, message);
  }

  static sendMessage(client, channel, message) {
    client.whisper('kenobi_sp', message);
    // client.action(channel, message);
  }

}

module.exports = MessageHandler;