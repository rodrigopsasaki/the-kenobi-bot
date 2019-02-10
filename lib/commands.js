
const detector = require('./bot-detector'),
      auth     = require('./auth');

class Commands {

  static execute(client, channel, user, message) {

    if (message === '!gbml') {
      return Commands.getBotMessageList(client, user);
    } else if (message.startsWith('!abm')) {
      return Commands.addBotMessage(client, channel, user, message);
    } else if (message.startsWith('!rbm')) {
      return Commands.removeBotMessage(client, channel, user, message);
    }

  }

  static getBotMessageList(client, user) {
    if (auth.isAllowed(user)) {
      client.whisper(user.username, detector.getKnownBotMessageList().join('\n'));
    }
  }

  static addBotMessage(client, channel, user, message) {
    if (auth.isAllowed(user)) {
      const botMessage = message.substr(message.indexOf(' ') + 1);
      detector.addBotMessage(botMessage);

      client.whisper(user.username, `message '${botMessage}' was added by you`);
    }
  }

  static removeBotMessage(client, channel, user, message) {
    if (auth.isAllowed(user)) {
      const botMessage = message.substr(message.indexOf(' ') + 1);
      detector.removeBotMessage(botMessage);

      client.whisper(user.username, `message '${botMessage}' was removed by you`);
    }
  }

}



module.exports = Commands;