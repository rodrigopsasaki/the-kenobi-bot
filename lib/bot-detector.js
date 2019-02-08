
const knownBotMessageList = [
  'doyounaporactuallysleep',
  '!points',
  'youspeakgerman?',
  'ilike',
  'letsgetthisstreamgoing',
  'watupppp',
  'youmakethislookeasy',
  'supsupsupkappa',
  'areyouinterestedinfashion',
  'greatstream,lookatthat',
  'Areyoumarried?',
  'doyouallowpoliticsinchat',
  'areyouactiveirl?',
  'illkeepuopeninatab',
  'showussomeplays',
  'canyounoticeme',
  'Iamhangnchillwithu',
  'goingtohangwithu',
  'mericaaaafuckyeah',
  'beep',
  'justfoundyourstream',
  'plsnocopypasterino',
  'Igottoheadoutsoon',
  'ihavetogoseeyaall',
  'i\'llchillwithu',
  'hello',
  'whatsgoinon',
  'ilovethecontentrightnow',
  'kabajiowhowoftendoyoustream?',
  'nerfhim',
  'hypedforthis',
  'hereforur',
  'geterdoone!',
  'thisguyremindsmeofsomeoneiknowirl',
  'iwantmanydollars',
  'nah,imeantipsaredifferentthanrevealingyourstrategies',
  'doyouhaveanymods',
  'youdeservemoreviewers',
  'sweeturback',
];

class BotDetector {

  static isBot(user, message) {
    if (user.mod || user.subscriber) {
      return false;
    }

    return knownBotMessageList.includes(message.replace(/\s/g,'').toLowerCase());
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