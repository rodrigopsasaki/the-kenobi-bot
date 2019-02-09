
const comparator = require('string-similarity'),
      fs         = require('fs');

const knownBotMessageList = [];

class BotDetector {

  static isBot(user, message) {
    if (user.mod || user.subscriber) {
      return false;
    }

    return knownBotMessageList
      .map((botMessage) => comparator.compareTwoStrings(botMessage, BotDetector.cleanMessage(message)))
      .filter((similarity) => similarity > .75)
      .length > 0;
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

  static cleanMessage(message) {
    message = message.replace(/@\w+\b/g, '');
    message = message.replace(/\s/g, '');
    message = message.toLowerCase();

    return message;
  }

  static loadBotMessageList() {
    const file = fs.readFileSync(`${__dirname}/../resources/messages.txt`);
    const lines = file.toString().split('\r\n');
    lines.map((line) => BotDetector.cleanMessage(line))
      .filter((line) => line.length > 10)
      .forEach((line) => knownBotMessageList.push(line));
  }

}

BotDetector.loadBotMessageList();
module.exports = BotDetector;