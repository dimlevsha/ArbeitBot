/**
 * Storage for all the strings in project; change once, use everywhere ;)
 *
 * @module helpers/strings
 * @license MIT
 */

const englishObjectId = '581d0b8db33e47e7008726bd';
const russianObjectId = '581d0b8db33e47e7008726be';
var Жалоба = 'Report';
var Назначить = 'Select contractor';
var Оценить = 'Rate';

const english = {
  resubscribe: 'Переподписаться',
  unsubscribe: 'Отписаться',
  hideButtons: 'Оставить',
  jobCreationFindFreelancerReminderMessage1: 'Похоже, Вы вчера создали работу:',
  jobCreationFindFreelancerReminderMessage2: 'но так и не выбрали фрилансера. Если Вам нужна какая-либо помощь или у Вас есть какие-либо вопросы, пожалуйста, напишите нам в техподдержку, нажав на кнопку ниже. Спасибо!',
  anotherJobDraftErrorMessage: 'Вы уже вводите описание для другой работы. Пожалуйста, либо отмените активный черновик работы, либо введите описание работы.',
  reportThankYouMessage: 'Спасибо за репорт! Модераторы уже занимаются этим вопросом. Постараемся избежать подобных казусов в будущем.',
  banMessage: 'Похоже, Вас кто-то зарепортил, а модераторы решили, что было за что. В итоге, Вас забанили. Пожалуйста, напишите нам в поддержку @dsl1500, если произошла какая-то ошибка — разберемся 👍',
  loadingMessage: '⏳ Загрузка...',
  askForUsername: 'Похоже, у Вас еще нет Username. Для того, чтобы подключиться к JobMaker, вам необходимо создать Username в настройках Telegram (Settings -> Username) 🆘',
  deprecatedMessage: 'Это сообщение устарело. Пожалуйста, пролистайте вниз, чтобы увидеть новую версию сообщения ⤵️',
  initialMessage: 'Добро пожаловать в JobMaker FEFU! 🙌 \nНадеемся, что благодаря JM вы сможете эффективно выполнять свои дела, а также легко находить людей, которые будут готовы предоставить вам работу 👌🏃 \n\nЧтобы приступить к поиску заданий/ исполнителей, вам необходимо выбрать в меню JM опцию «Инструкция», где вы узнаете о правилах и принципах работы нашего сервиса 💬\n\nДля комфортного использования JM рекомендуем воспользоваться функцией смены фона в Telegram (Settings -> Chat Background) 🌌 \n\nЖелаем удачного поиска!🔎',
  mainMenuMessage: 'Выберите "Профиль", если хотите получить задание, или "Задания", если хотите найти исполнителей🔎',
  noJobsExistMessage: 'У Вас пока нет ни одного задания. Поэтому выберите пункт "Создать задание".',
  clientMenuMessage: 'Пожалуйста, выберите нужную опцию из меню.',
  selectLanguageMessage: 'Выберите язык, который вы будете использовать для создания задания. Вы будете видеть только тех исполнителей, которые выбрали этот же язык в качестве разговорного.',
  selectSupercategoryMessage: 'Пожалуйста, выберите категорию',
  selectCategoryMessage: 'Отлично! Отметьте категорию, к которой будет относиться ваше задание. Если желаемая категория отсутствует в списке, то это значит, что на данный момент в системе нет свободных исполнителей, которые захотят действовать в рамках этой категории.',
  selectJobHourlyRateMessage: 'Укажате примерную цену, которую вы готовы заплатить. Конкретная цена обговаривается лично с исполнителем.',
  addJobDescriptionMessage: 'Напишите ваше задание (20-500 символов), коротко излагая его суть, время и место (остальные детали обговариваются лично с выбранным исполнителем).',
  jobDescriptionErrorMessage: 'Вы уверены, что ваше описание содержит от 20-500 символов?',
  bioErrorMessage: 'Убедитесь, что ваш профиль содержит не более 300 символов.',
  addJobDescriptionHideKeyboardMessage: 'Вы можете отменить действие в любой момент.',
  addBioHideKeyboardMessage: 'Вы можете отменить действие в любой момент.',
  filledEverythingMessage: 'Круто! Ваш профиль заполнен! Теперь вы можете получать задания от заказчиков. Если же вы хотите найти исполнителей, то выберите опцию «Задания». ',
  fullFreelancerMessageAvailable: 'Ваш профиль заполнен! Теперь вы можете получать задания от заказчиков. Если же вы хотите найти исполнителей, то выберите опцию «Задания». ',
  fullFreelancerMessageBusy: 'Ваш профиль заполнен! Однако, вам не будут приходить задания, пока ваш статус "Заняты',
  emptyFreelancerMessage: 'Добро пожаловать в «Профиль»! 😊 \n\nТеперь выберите опцию «О себе» и впишите туда информацию (300 символов максимально), которую после смогут видеть работодатели (интересы, поле деятельности, наиболее частое местонахождение в ДВФУ, ссылка на страницу в социальных сетях) 🔛Также, выполните указанные в инструкции действия в опциях «📌Категории», «💰Оплата», «🇷🇺Язык🇬🇧». \nРедактировать указанную информацию вы можете в любой момент, повторно нажав на нужную опцию ✅',
  missingFreelancerMessage: 'Ваш профиль заполнен не полностью, вы не можете получать задания!🙀\n Пожалуйста, выберите опцию «О себе» и впишите туда информацию (300 символов максимально), которую после смогут видеть работодатели (интересы, поле деятельности, наиболее частое местонахождение в ДВФУ, ссылка на страницу в социальных сетях) 🔛Также, выполните указанные в инструкции действия в опциях «📌Категории», 💰Оплата», «🇷🇺Язык🇬🇧». \nРедактировать указанную информацию вы можете в любой момент, повторно нажав на нужную опцию ✅',
  helpMessage: 'Вас приветствует команда JobMaker FEFU!🎉\n\nКак начать работу в нашей системе?💬 \n1)Заполните свой Профиль😎, выбрав соответствующую опцию в главном меню.\n\nЖелаем удачного поиска!🔎',
  becameBusyMessage: 'Вы изменили ваш статус на "Заняты". Это значит, что вы не будете получать задания, пока не изменить свой статус на "Доступны',
  becameAvailableMessage: 'Вы изменили свой статус на "Доступны".Вы будете получать задания, пока не измените свой статус на "Заняты',
  missingBecameBusyMessage: 'Вы изменили свой статус на "Заняты. Но это не имеет значения, если  вы не заполнили профиль, так как не сможете получать задания.',
  missingBecameAvailableMessage: 'Вы изменили свой статус на "Доступны". Но это не имеет значения, если  вы не заполнили профиль, так как не сможете получать задания.',
  jobCreationSuccessMessage: 'Круто! Задание создано, мы отправили его вам ниже ⤵️',
  pickFreelancersMessage: 'Пожалуйста, выберите тех, кому отправить предложение о выполнении работы.',
  editBioMessage: 'Пожалуйста, введите информацию о себе (максимально 300 символов). Пишите коротко и ясно. Также можно добавить ссылку на свой профиль в социальных сетях.',
  selectCandidateMessage: 'Выберите исполнителя, кто вам нравится больше всего.',
  changedBioMessage: 'Отлично!👏 Информация о вас, которую смогут видеть работодатели:\n\n',
  notChangedBioMessage: 'Информация о вас не была изменена.\n\n',
  yourCurrentBio: 'Информация о вас, которую смогут видеть работодатели:',
  editHourlyRateMessage: 'Задания с какой оплатой вы хотите получать?',
  editLanguageMessage: 'На каких языках вы говорите? Далее вы будете получать задания, написанные на выбранном языке. ',
  editInterfaceLanguageMessage: 'Please select your language of preference. This option will only affect the user interface of the bot. It will not affect your ability to receive or post job offers.',
  pickCategoriesMessage: 'Выберите все интересующие категории для заданий, в рамках деятельности которых вы хотели бы сотрудничать. ',
  suggestCategoryMessage: 'Предложить категорию',
  waitContractorResponseMessage: 'Вы отправили предложение выбранному исполнителю. Пожалуйста, подождите пока он примет либо откажется от него, либо выберите другого исполнителя если вам надоело ждать.ℹ️',
  acceptOrRejectMessage: 'Поздравляем! У вас новое предложение! Пожалуйста, примите или откажитесь.',
  freelancerInterestedNotification: ' заинтересовался вашим предложением ',
  contactWithFreelancerMessage: 'Прекрасно! Исполнитель согласен выполнить вашу работу! Пожалуйста, свяжитесь с ним лично, и оцените его после выполненной работы.',
  contactWithClientMessage: 'Замечательно! Вы приняли предложение. Сейчас свяжитесь с заказчиком лично и оцените его, когда сделаете свою работу.',
  rateFreelancerMessage: 'Оцените исполнителя. Насколько хорошо выполнена работа?',
  rateClientMessage: 'Оцените заказчика. Было ли вам комфортно с ним работать?',
  reviewFreelancerMessage: 'reviewFreelancerMessage',
  reviewClientMessage: 'reviewClientMessage',
  thanksReviewMessage: 'Спасибо за отзыв!',
  youWereRated: 'Вы были оценены ',
  clientHasChosenAnotherFreelancer: 'Заказчик выбрал другого исполнителя',
  noCandidatesMessage: 'К сожалению, на данный момент нет доступных исполнителей 😥 Пожалуйста, cпроверьте позже или создайте новое задание.',
  thisWorkIsRemoved: 'Задание было удалено ✌️',
  thisDraftIsRemoved: 'Вы не создали задание 😔',
  shareProfile: 'Share profile',
  mainMenuOptions: {
    findJobs: '😎 Профиль',
    findContractors: '🏆 Задания',
    help: '💡Инструкция',
    chooseLanguage: '📣 Choose language',
  },
  clientMenuOptions: {
    postNewJob: '🔨 Создать задание',
    myJobs: '🛠 Мои задания',
    back: '🔙 Назад',
  },
  changeTo: 'Сменить на: ',
  back: '🔙 Назад',
  freelanceMenuOptions: {
    editBio: '😏 О себе',
    addBio: '😏 О себе',
    editCategories: '📌 Категории',
    addCategories: '📌 Категории',
    editHourlyRate: '💰 Оплата',
    addHourlyRate: '💰 Оплата',
    back: '🔙 Назад',
    busy: '🚷 Заняты',
    available: '💃 Доступны',
    addLanguage: '🇷🇺 Добавить язык',
  },
  hourlyRateOptions: [
    '0р – 50р', '0р – 250р', '0р – 500р',
    '0р – 1000р', '0р – 5000р', '0р - 100000'
  ],
  hourlyRateAllRatesOption: 'Отправить всем',
  selectedCategory: '✅ ',
  selectedHourlyRate: '✅ ',
  selectedLanguage: '✅ ',
  categoryLeft: '<',
  categoryRight: '>',
  inlineSeparator: '~',
  categoryInline: 'cI',
  hourlyRateInline: 'hRI',
  interfaceLanguageInline: 'iLanI',
  languageInline: 'lanI',
  adminBanInline: 'abI',
  freelancerInline: 'fI',
  freelancerPageInline: 'fPI',
  jobManageInline: 'jMI',
  freelancerJobInline: 'fJI',
  freelancerJobEditInline: 'fJEI',
  selectFreelancerInline: 'sFI',
  selectAnotherFreelancerInline: 'sAFI',
  freelancerAcceptInline: 'fAI',
  askRateClientInline: 'aRCI',
  askRateFreelancerInline: 'aRFI',
  rateClientInline: 'rCI',
  rateFreelancerInline: 'rFI',
  completeJobInline: 'cJI',
  reportJobInline: 'rpJI',
  reportFreelancerInline: 'rpFI',
  reportClientInline: 'rpCI',
  cancelJobCreationInline: 'cJCI',
  categoryBackInline: 'cBaI',
  supercategoryBackInline: 'sCBaI',
  hourlyRateBackInline: 'hRBaI',
  cancelBioEnterInline: 'cBEI',
  inputLanguageInline: 'iLI',
  inputSupercategoryNameInline: 'iSCNI',
  inputCategoryNameInline: 'iCNI',
  inputHourlyRateInline: 'iHRI',
  inputJobDescriptionInline: 'iJDI',
  inputBioCancelInline: 'iBCI',
  unsubscripeFromGodvoiceInline: 'uFGI',
  hideButtonsGodvoiceInline: 'hBGI',
  resubscribeGodvoiceInline: 'rGVI',
  jobCreationState: 'jobCreationState',
  inputBioState: 'inputBioState',
  inputLanguageState: 'inputLanguageState',
  inputCategoryNameState: 'inputCategoryNameState',
  inputHourlyRateState: 'inputHourlyRateState',
  inputJobDescriptionState: 'inputJobDescriptionState',
  inputReportMessage: 'inputReportMessage',
  cancel: '❌ Отменить',
  jobCreateCancel: '❌ Отменить',
  selectFreelancerCancel: '❌ Отменить',
  jobSendAllFreelancers: 'Отправить всем',
  jobRefresh: 'Обновить',
  jobDelete: 'Удалить',
  jobEdit: 'Edit',
  jobSelectFreelancer: 'Назначить',
  jobSelectAnotherFreelancer: 'Выбрать другого исполнителя',
  jobBackPage: '<',
  jobNextPage: '>',
  interestedOption: '✅',
  notInterestedOption: '❌',
  acceptOption: '✅',
  refuseOption: '❌',
  pendingOption: '🕒',
  star: '⭐',
  bioReviews: 'Reviews:',
  saveReviewOption: 'saveReview',
  adminNotifications: {
    adminBanReviewInline: 'aBRI',
    adminDeleteReviewInline: 'aDRI',
    adminOkReviewInline: 'aORI',
    adminReviewDecision: 'Moderators have made a decision about the review.',
  },
  jobStates: {
    searchingForFreelancer: 'searchingForFreelancer',
    freelancerChosen: 'freelancerChosen',
    finished: 'finished',
    /** todo: need to delete this later */
    frozen: 'frozen',
    banned: 'banned',
    rated: 'rated',
    removed: 'removed',
  },
  reviewTypes: {
    byClient: 'byCl',
    byFreelancer: 'byFl',
  },
  freelancerOptions: {
    interested: 'Интересно',
    notInterested: 'Не интересно',
    report: '❗️ Жалоба',
  },
  freelancerAcceptOptions: {
    accept: '✅ Принять',
    refuse: '❌ Отказаться',
  },
  jobFinishedOptions: {
    rate: '⭐ Оценить',
    report: '❗️ Жалоба',
  },
  report: {
    thanks: 'Thanks you for your alertness!',
    reason: 'What is the report reason?',
  },
  rateOptions: {
    back: '🔙 Назад',
    oneStar: '⭐',
    twoStars: '⭐⭐',
    threeStars: '⭐⭐⭐',
    fourStars: '⭐⭐⭐⭐',
    fiveStars: '⭐⭐⭐⭐⭐',
  },
  rateOptionsArray: [
    '⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐',
  ],
  shouldUpdateJobMessage: 'shouldUpdateJobMessage',
  shouldUpdateFreelancerMessage: 'shouldUpdateFreelancerMessage',
  shouldMakeInterested: 'shouldMakeInterested',
  newReview: 'newReview',
};

const russian = {
  resubscribe: 'Переподписаться',
  unsubscribe: 'Отписаться',
  hideButtons: 'Оставить',
  jobCreationFindFreelancerReminderMessage1: 'Похоже, Вы вчера создали работу:',
  jobCreationFindFreelancerReminderMessage2: 'но так и не выбрали фрилансера. Если Вам нужна какая-либо помощь или у Вас есть какие-либо вопросы, пожалуйста, напишите нам в техподдержку, нажав на кнопку ниже. Спасибо!',
  anotherJobDraftErrorMessage: 'Вы уже вводите описание для другого черновика работы. Пожалуйста, либо отмените активный черновик работы, либо введите описание работы.',
  reportThankYouMessage: 'Спасибо за репорт! Модераторы уже занимаются этим вопросом. Постараемся избежать подобных казусов в будущем.',
  banMessage: 'Похоже, Вас кто-то зарепортил, а модераторы решили, что было за что. В итоге, Вас забанили. Пожалуйста, напишите нам в поддержку @arbeit_bot_support, если произошла какая-то ошибка — разберемся 👍',
  loadingMessage: '🦄 Загрузка...',
  askForUsername: 'Похоже, у Вас еще нет юзернейма в Телеграме. Пожалуйста, зайдите в настройки Телеграма и установите себе юзернейм. Спасибо!',
  deprecatedMessage: 'Это сообщение устарело. Пожалуйста, пролистайте вниз, чтобы увидеть новую версию сообщения ⤵️',
  initialMessage: 'Добро пожаловать на первую бесплатную фриланс-биржу с открытым кодом в Телеграме.\n\nЕсли вы ищете работу, пожалуйста, заполните свой "Профиль". Если вы ищете фрилансеров, пройдите в "Найти фрилансеров". Жмите "Помощь", если у вас есть какие-либо вопросы.\n\nСпасибо за то, что стали частью нашей дружной семьи!',
  mainMenuMessage: 'Выберите "Профиль", если ищете работу. Если ищете фрилансеров — выберите "Найти фрилансеров".',
  noJobsExistMessage: 'У вас еще нет созданных работ. Вы можете создать работу, нажав на "Создать работу".',
  clientMenuMessage: 'Пожалуйста, выберите пункт меню.',
  selectLanguageMessage: 'Пожалуйста, выберите, на каком языке будет работа. Мы покажем Вам только тех фрилансеров, которые умеют говорить на этом языке.',
  selectSupercategoryMessage: 'Пожалуйста, выберите категорию своей работе. Количество готовых к работе фрилансеров для каждой категории обозначено [квадратными скобками].',
  selectCategoryMessage: 'Please, select a subcategory relevant to your job. The number of available contractors is displayed between [square brackets] for each subcategory.',
  selectJobHourlyRateMessage: 'Please, select how much you would like to pay. The price is given in USD/hour to identify the skill levels of developers. You can negotiate a fixed price with the contractor later on. The number of available contractors is displayed between [square brackets] for each rate range.',
  addJobDescriptionMessage: 'Please, provide a job description (100-500 chars). It will be visible to contractors. Please, be brief – the details can be discussed with the contractors later on.',
  jobDescriptionErrorMessage: 'Please make sure that your job description is between 100 and 500 chars.',
  bioErrorMessage: 'Please make sure that your bio fits in 150 chars.',
  addJobDescriptionHideKeyboardMessage: 'You can cancel at any time at job creation message.',
  addBioHideKeyboardMessage: 'You can cancel at any time.',
  filledEverythingMessage: 'You did it! Your profile is now complete. Now just sit back and wait for job offers.',
  fullFreelancerMessageAvailable: 'Your profile is complete! Now just sit back and wait for job offers.',
  fullFreelancerMessageBusy: 'Your profile is complete! However, clients will not contact you since your status is "Busy".',
  emptyFreelancerMessage: 'Welcome to your freelancer profile! Please, fill out your bio, select your hourly rate and categories of expertise.',
  missingFreelancerMessage: 'Welcome to your freelancer profile! You need both to fill out your bio and select your hourly rate and categories of expertise so that clients can see you.',
  helpMessage: 'If you want to learn more about this bot, please go to arbeitbot.com.\n\nIf you have any questions, concerns or just found a bug, please contact us at @arbeit_bot_support.\n\nIn case you want to see the code of @arbeit_bot on GitHub, please follow the link provided below. We would appreciate if you could star our repository as well.\n\nThank you a lot for your support!',
  becameBusyMessage: 'You just set your status to "Busy". You will not receive any new job offers until you switch back to "Available".',
  becameAvailableMessage: 'You just switched to "Available" status. You will now receive relevant job offers until you switch back to "Busy".',
  missingBecameBusyMessage: 'You just changed your status to "Busy". But this doesn\'t make much difference since clients will not be able to find you without properly filled bio, categories and hourly rate.',
  missingBecameAvailableMessage: 'You just changed to "Available" status.  But this doesn\'t make much difference since clients will not be able to find you without properly filled bio, categories and hourly rate.',
  jobCreationSuccessMessage: 'Success! A new job has been created, we have sent it to you below ⤵️',
  pickFreelancersMessage: 'Please, select which contractors should receive job offers from you.',
  editBioMessage: 'Please, enter your bio (max 150 chars). Keep it brief but descriptive – the clients will see it beside your rating. Feel free to add a link to your personal website.',
  selectCandidateMessage: 'Please, select the candidate that you liked the most.',
  changedBioMessage: 'Congrats! Your new bio is:\n\n',
  notChangedBioMessage: 'Your bio not changed.\n\n',
  yourCurrentBio: 'Your current bio:',
  editHourlyRateMessage: 'What is your hourly rate? You will only receive job offers of relevant hourly rate.',
  editLanguageMessage: 'What languages do you speak? You will only receive job offers of selected languages.',
  editInterfaceLanguageMessage: 'Please select your language of preference. This option will only affect the user interface of the bot. It will not affect your ability to receive or post job offers.',
  pickCategoriesMessage: 'Please, select your skills. You will only receive job offers in categories you select.',
  suggestCategoryMessage: 'Suggest your own category',
  waitContractorResponseMessage: 'You sent an offer to one of the freelancers. Please, wait until the freelancer accepts or rejects your offer, or simply select another freelancer if you do not want to wait anymore.',
  acceptOrRejectMessage: 'Congrats! You received a job offer! Please, accept or reject it.',
  freelancerInterestedNotification: ' became interested in ',
  contactWithFreelancerMessage: 'Wonderful! The contractor has accepted your offer! Please, contact them directly, and rate your contractor after the job is done.',
  contactWithClientMessage: 'Great! You have accepted this offer. Now please communicate with the client directly, and rate your experience as soon as you finish the job.',
  rateFreelancerMessage: 'The only thing left is to rate your contractor. How well was the job done?',
  rateClientMessage: 'The only thing left is to rate your client. How good was your experience with this client?',
  reviewFreelancerMessage: 'reviewFreelancerMessage',
  reviewClientMessage: 'reviewClientMessage',
  thanksReviewMessage: 'Thanks for the review!',
  youWereRated: 'You have received a new rating from ',
  clientHasChosenAnotherFreelancer: 'The client has chosen another freelancer.',
  noCandidatesMessage: 'There are no available candidates right now 😥 Please, check back later or create a new job.',
  thisWorkIsRemoved: 'This job has been deleted ✌️',
  thisDraftIsRemoved: 'This job draft has been deleted ✌️',
  shareProfile: 'Share profile',
  mainMenuOptions: {
    findJobs: '👤 Профиль',
    findContractors: '⛑ Найти фрилансеров',
    help: '❔ Помощь',
    chooseLanguage: '📣 Сменить язык',
  },
  clientMenuOptions: {
    postNewJob: '🔨 Создать работу',
    myJobs: '🛠 Созданные работы',
    back: '🔙 Назад',
  },
  changeTo: 'Сменить на: ',
  back: '🔙 Назад',
  freelanceMenuOptions: {
    editBio: '🖊 Редактировать био',
    addBio: '🖊 Добавить био',
    editCategories: '📌 Редактировать категории',
    addCategories: '📌 Добавить категории',
    editHourlyRate: '💲 Редактировать часовую ставку',
    addHourlyRate: '💲 Добавить часовую ставку',
    back: '🔙 Назад',
    busy: '⚒ Заняты',
    available: '✅ Доступны',
    addLanguage: '🇺🇸 Добавить язык',
  },
  hourlyRateOptions: [
    '$0 – $5', '$5 – $10', '$10 – $20',
    '$20 – $30', '$30 – $40', '$40 – $50',
    '$50 – $75', '$75 – $100', '$100 – $200',
    '$200+',
  ],
  hourlyRateAllRatesOption: 'All hourly rates',
  selectedCategory: '✅ ',
  selectedHourlyRate: '✅ ',
  selectedLanguage: '✅ ',
  categoryLeft: '<',
  categoryRight: '>',
  inlineSeparator: '~',
  categoryInline: 'cI',
  hourlyRateInline: 'hRI',
  interfaceLanguageInline: 'iLanI',
  languageInline: 'lanI',
  adminBanInline: 'abI',
  freelancerInline: 'fI',
  freelancerPageInline: 'fPI',
  jobManageInline: 'jMI',
  freelancerJobInline: 'fJI',
  freelancerJobEditInline: 'fJEI',
  selectFreelancerInline: 'sFI',
  selectAnotherFreelancerInline: 'sAFI',
  freelancerAcceptInline: 'fAI',
  askRateClientInline: 'aRCI',
  askRateFreelancerInline: 'aRFI',
  rateClientInline: 'rCI',
  rateFreelancerInline: 'rFI',
  completeJobInline: 'cJI',
  reportJobInline: 'rpJI',
  reportFreelancerInline: 'rpFI',
  reportClientInline: 'rpCI',
  cancelJobCreationInline: 'cJCI',
  categoryBackInline: 'cBaI',
  supercategoryBackInline: 'sCBaI',
  hourlyRateBackInline: 'hRBaI',
  cancelBioEnterInline: 'cBEI',
  inputLanguageInline: 'iLI',
  inputSupercategoryNameInline: 'iSCNI',
  inputCategoryNameInline: 'iCNI',
  inputHourlyRateInline: 'iHRI',
  inputJobDescriptionInline: 'iJDI',
  inputBioCancelInline: 'iBCI',
  unsubscripeFromGodvoiceInline: 'uFGI',
  hideButtonsGodvoiceInline: 'hBGI',
  resubscribeGodvoiceInline: 'rGVI',
  jobCreationState: 'jobCreationState',
  inputBioState: 'inputBioState',
  inputLanguageState: 'inputLanguageState',
  inputCategoryNameState: 'inputCategoryNameState',
  inputHourlyRateState: 'inputHourlyRateState',
  inputJobDescriptionState: 'inputJobDescriptionState',
  inputReportMessage: 'inputReportMessage',
  cancel: '❌ Cancel',
  jobCreateCancel: '❌ Cancel',
  selectFreelancerCancel: '❌ Cancel',
  jobSendAllFreelancers: 'Send to all',
  jobRefresh: 'Refresh',
  jobDelete: 'Delete',
  jobEdit: 'Edit',
  jobSelectFreelancer: 'Select contractor',
  jobSelectAnotherFreelancer: 'Select another contractor',
  jobBackPage: '<',
  jobNextPage: '>',
  interestedOption: '✅',
  notInterestedOption: '❌',
  acceptOption: '✅',
  refuseOption: '❌',
  pendingOption: '🕒',
  star: '⭐',
  bioReviews: 'Reviews:',
  saveReviewOption: 'saveReview',
  adminNotifications: {
    adminBanReviewInline: 'aBRI',
    adminDeleteReviewInline: 'aDRI',
    adminOkReviewInline: 'aORI',
    adminReviewDecision: 'Moderators have made a decision about the review.',
  },
  jobStates: {
    searchingForFreelancer: 'searchingForFreelancer',
    freelancerChosen: 'freelancerChosen',
    finished: 'finished',
    /** todo: need to delete this later */
    frozen: 'frozen',
    banned: 'banned',
    rated: 'rated',
    removed: 'removed',
  },
  reviewTypes: {
    byClient: 'byCl',
    byFreelancer: 'byFl',
  },
  freelancerOptions: {
    interested: 'Interested',
    notInterested: 'Not interested',
    report: '❗️ Report',
  },
  freelancerAcceptOptions: {
    accept: '✅ Accept',
    refuse: '❌ Refuse',
  },
  jobFinishedOptions: {
    rate: '⭐ Rate',
    report: '❗️ Report',
  },
  report: {
    thanks: 'Thanks you for your alertness!',
    reason: 'What is the report reason?',
  },
  rateOptions: {
    back: '🔙 Back',
    oneStar: '⭐',
    twoStars: '⭐⭐',
    threeStars: '⭐⭐⭐',
    fourStars: '⭐⭐⭐⭐',
    fiveStars: '⭐⭐⭐⭐⭐',
  },
  rateOptionsArray: [
    '⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐',
  ],
  shouldUpdateJobMessage: 'shouldUpdateJobMessage',
  shouldUpdateFreelancerMessage: 'shouldUpdateFreelancerMessage',
  shouldMakeInterested: 'shouldMakeInterested',
  newReview: 'newReview',
};

/**
 * Function to get the right language file
 * @param {Mongoose:User} user User that requests file
 * @return {Object[String:String]} Object containing localization strings
 */
function locale(user) {
  if (!user || !user.interfaceLanguage || String(user.interfaceLanguage._id) === englishObjectId || String(user.interfaceLanguage) === englishObjectId) {
    return english;
  } else {
    return russian;
  }
}

/** Exports */
module.exports = locale;
