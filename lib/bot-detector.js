
const knownBotMessageList = [
  'bot-message-test-1',
  'bot-message-test-2',
  'bot-message-test-3',
];

class BotDetector {

  static isBot(message) {
    return knownBotMessageList.includes(message.toLowerCase());
  }

  static getKnownBotMessageList() {
    return knownBotMessageList;
  }

  static addBotMessage(message) {
    knownBotMessageList.push(message);
  }

  static removeBotMessage(message) {
    knownBotMessageList.splice( knownBotMessageList.indexOf(message), 1 );
  }

}

module.exports = BotDetector;