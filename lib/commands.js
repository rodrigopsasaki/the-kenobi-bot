
const detector = require('./bot-detector');

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
    client.whisper(user['display-name'], detector.getKnownBotMessageList().join('\n'));
  }

  static addBotMessage(client, channel, user, message) {
    const botMessage = message.substr(message.indexOf(' ') + 1);
    detector.addBotMessage(botMessage);

    client.action(channel, `${user['display-name']} added the bot message '${botMessage}'`);
  }

  static removeBotMessage(client, channel, user, message) {
    const botMessage = message.substr(message.indexOf(' ') + 1);
    detector.removeBotMessage(botMessage);

    client.action(channel, `${user['display-name']} removed the bot message '${botMessage}'`);
  }

}



module.exports = Commands;