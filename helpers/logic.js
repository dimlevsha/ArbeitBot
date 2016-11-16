/**
 * Main bot logic that handles incoming messages and routes logic to helpers files
 *
 * @module helpers/logic
 * @license MIT
 */

/** Dependencies */
const hourlyRatePicker = require('./hourlyRatePicker');
const categoryPicker = require('./categoryPicker');
const languagePicker = require('./languagePicker');
const adminPanel = require('./adminCommands');
const jobManager = require('./jobManager');
const keyboards = require('./keyboards');
const dbmanager = require('./dbmanager');
const profile = require('./profile');
const strings = require('./strings');
const check = require('./messageParser');
const bot = require('./telegramBot');

/** Handle messages */

/**
 * Fired when bot receives a message
 *
 * @param {Telegram:Message} msg - Message received by bot
 */
bot.on('message', (msg) => {
  if (!msg) return;
  else if (!msg.from.username) {
    profile.sendAskForUsername(bot, msg);
    return;
  }
  profile.textInputCheck(msg, (isTextInput, user) => {
    if (user) {
      if (user.ban_state) {
        profile.sendBanMessage(bot, msg);
        return;
      }

      profile.updateProfile(msg, user);

      if (isTextInput) {
        global.eventEmitter.emit(((msg.text === strings().cancel) ? 'cancel' : '') + isTextInput, { msg, user, bot });
      } else if (check.replyMarkup(msg)) {
        handleKeyboard(msg);
      } else if (check.botCommandStart(msg)) {
        keyboards.sendMainMenu(bot, msg.chat.id, false);
      } else if (check.adminCommand(msg)) {
        adminPanel.handleAdminCommand(msg, bot);
      } else {
        /** todo: handle strange message */
      }
    } else if (check.botCommandStart(msg)) {
      profile.createProfile(bot, msg);
    } else if (check.adminCommand(msg)) {
      adminPanel.handleAdminCommand(msg, bot);
    }
  });
});


bot.onText(/найти/, msg => {
  let fromId = msg.from.id;
  let nayti = 'Если вы ходите выполнять задания, то:\n    1.1) Вам необходимо заполнить свой "Профиль", выбрав соответствующую опцию в главном меню.\n   1.2)Ждать предложений от заказчиков и выбирать те, которые вы бы хотели выполнить.\n   1.3)Если создатель задания выберет исполнителем именно вас, то подтвердить, что вы согласны выполнить его задание и связаться с ним лично, используя телеграм или другие способы коммуникации\n  1.4)После того, как работа будет выполнена, вы можете оценить создателя задания или подать на него жалобу.'
  return bot.sendMessage(fromId, nayti);
});

bot.onText(/создать/, msg => {
  let fromId = msg.from.id;
  return bot.sendMessage(fromId, "Как создать задание");
});
/**
 * Fired when user clicks button on inlline keyboard
 *
 * @param {Telegram:Message} msg - Message that gets passed from user and info about button clicked
 */
bot.on('callback_query', (msg) => {
  if (!msg.from.username) {
    profile.sendAskForUsername(msg);
    return;
  }

  dbmanager.findUser({ id: msg.from.id })
    .then((user) => {
      if (user.ban_state) {
        profile.sendBanMessage(msg);
        return;
      }

      const options = msg.data.split(strings().inlineSeparator);
      const inlineQuery = options[0];
      global.eventEmitter.emit(inlineQuery, { bot, msg, user });
    })
    .catch(/** todo: handle error */);
});

bot.on('inline_query', (msg) => {
  dbmanager.findUser({ id: msg.from.id })
    .then((user) => {
      const results = [{
        type: 'article',
        id: `${getRandomInt(1000000000000000, 999999999999999999)}`,
        title: strings().shareProfile,
        input_message_content: {
          message_text: user.getTextToShareProfile(),
        },
      }];

      const opts = {
        cache_time: 60,
        is_personal: true,
      };

      bot.answerInlineQuery(msg.id, results, opts)
        .catch(/** todo: handle error */);
    })
    .catch(/** todo: handle error */);
});

/**
 * Handler for custom keyboard button clicks
 *
 * @param {Telegram:Message} msg - Message that is passed with click and keyboard option
 */
function handleKeyboard(msg) {
  const text = msg.text;
  const mainMenuOptions = strings().mainMenuOptions;
  const clientOptions = strings().clientMenuOptions;
  const freelanceMenuOptions = strings().freelanceMenuOptions;

  if (text === mainMenuOptions.findJobs) {
    keyboards.sendFreelanceMenu(bot, msg.chat.id);
  } else if (text === mainMenuOptions.findContractors) {
    keyboards.sendClientMenu(bot, msg.chat.id);
  } else if (text === mainMenuOptions.help) {
    keyboards.sendHelp(bot, msg.chat.id);
  } else if (text === mainMenuOptions.chooseLanguage) {
    languagePicker.sendInterfaceLanguagePicker(bot, msg.chat.id);
  } else if (text === clientOptions.postNewJob) {
    jobManager.startJobDraft(bot, msg);
  } else if (text === clientOptions.myJobs) {
    jobManager.sendAllJobs(bot, msg);
  } else if (text === freelanceMenuOptions.editBio || text === freelanceMenuOptions.addBio) {
    profile.askForBio(msg, bot);
  } else if (text === freelanceMenuOptions.editCategories ||
    text === freelanceMenuOptions.addCategories) {
    categoryPicker.sendCategories(bot, msg.chat.id);
  } else if (text === freelanceMenuOptions.editHourlyRate ||
    text === freelanceMenuOptions.addHourlyRate) {
    hourlyRatePicker.sendHourlyRate(bot, msg.chat.id);
  } else if (text === freelanceMenuOptions.busy || text === freelanceMenuOptions.available) {
    profile.toggleAvailability(bot, msg.chat.id);
  } else if (text.indexOf('🇷🇺') > -1 || text.indexOf('🇺🇸') > -1) {
    /** todo: remove hardcoded flags ^^^ */
    languagePicker.sendLanguagePicker(bot, msg.chat.id);
  } else if (text === freelanceMenuOptions.back) {
    keyboards.sendMainMenu(bot, msg.chat.id);
  }
}


/** Helpers */

/**
 * Get random int
 *
 * @param {Number} min
 * @param {Number} max
 * @return {Number} Random number
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}
