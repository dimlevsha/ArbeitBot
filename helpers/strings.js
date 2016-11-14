/**
 * Storage for all the strings in project; change once, use everywhere ;)
 *
 * @module helpers/strings
 * @license MIT
 */
const ❗️ = 'Rate'
module.exports = {
  anotherJobDraftErrorMessage: 'You are already entering description for another job draft. Please either cancel the currently active job draft or provide us with the job description for the currently active job draft.',
  reportThankYouMessage: 'Спасибо за то, что сообщили нам о нарушении! Наши модераторы немедленно рассотрят вашу заявку и предпримут все необходимое.',
  banMessage: 'На вас подали жалобу, и наши модераторы приняли решение о вашей блокировке.  Если это ошибка, то обращайтесь к администратору @dsl1500 и мы посмотрим, что можно сделать.',
  loadingMessage: '🦄 Загрузка...',
  askForUsername: 'У вас нет никнейма! Пожалуйста заполните его в настройках телеграмма.',
  deprecatedMessage: 'Пролестните страницу вниз. ⤵️',
  initialMessage: 'Добро пожаловать в JobMaker FEFU!🙌 \nНадеемся, что благодаря JM Вы сможете эффективно выполнять свои дела, а также легко зарабатывать, помогая другим.🏃👌 \n\nДля комфортного использования JM рекомендуем воспользоваться функцией смены фона в Telegram. 🌌Ответы на вопросы о работе системы Вы найдёте в графе "Помощь".💬 \n\nЖелаем удачного поиска!🔎',
  mainMenuMessage: 'Выберите "Профиль" если ищите задание, либо – "Найти исполнителей".',
  noJobsExistMessage: 'У Вас пока нет ни одного задания. Поэтому выберите пункт "Создать задание".',
  clientMenuMessage: 'Пожалуйста, выберите нужную опцию из меню.',
  selectLanguageMessage: 'Пожалуйста, выберите язык, который вы будете использовать для написания задания, вы увидите только тех исполнителей, которые выбрали этот язык в качестве разговорного.',
  selectSupercategoryMessage: 'Please, select a category relevant to your job. The number of available contractors is displayed between [square brackets] for each category.',
  selectCategoryMessage: 'Пожалуйста, выберите категорию вашего задания. Доступное количество исполнителей отображается в [скобках].',
  selectJobHourlyRateMessage: 'Укажате примерную цену, которую вы готовы заплатить. Конкретная цена обговаривается лично с исполнителем.',
  addJobDescriptionMessage: 'Пожалуйста, напишите ваше задание (20-500 знаков). Оно будет видно для исполнителей. Будьте кратки, детали обговариваются лично.',
  jobDescriptionErrorMessage: 'Вы уверены, что ваше описание содержит от 20-500 символов?',
  bioErrorMessage: 'Убедитесь, что ваш профиль содержит не более 300 символов.',
  addJobDescriptionHideKeyboardMessage: 'Вы можете отменить действие в любой момент.',
  addBioHideKeyboardMessage: 'Вы можете отменить действие в любой момент.',
  filledEverythingMessage: 'Круто! Ваш профиль заполнен. Сейчас вы можете получать задания от заказчиков.',
  fullFreelancerMessageAvailable: 'Ваш профиль заполнен. Сейчас вы можете получать задания от заказчиков.',
  fullFreelancerMessageBusy: 'Ваш профиль заполнен! Однако, вам не будут приходить задания, пока ваш статус "Занят(а).',
  emptyFreelancerMessage: 'Добро пожаловать в профиль! Пожалуйста, напишите информацию "О себе", выберите свой язык, примерную сумму, за которую готовы работать, а также категории деятельности, в которых хотели бы сотрудничать. Иначе вы не сможете получать задания.',
  missingFreelancerMessage: 'Ваш профиль заполнен не полностью, вы не можете получать задания! Пожалуйста, напишите информацию "О себе", выберите свой язык, примерную сумму, за которую готовы работать, а также категории деятельности, в которых хотели бы сотрудничать.',
  helpMessage: 'Вас приветствует команда JobMaker!\n\nДля того, чтобы эффективно пользоваться JM, Вам необходимо для начала заполнить свой профиль через графу "О себе", затем добавить язык , интересующую Вас оплату услуг, желаемые категории, которые наиболее привлекательны для Вас.\n\nС помощью JM Вы можете как выполнять работу, которую вам пришлют исходя из вашего профиля, так и искать исполнителей Ваших задач, создав свое собственное задание.\n\nПо всем интересующим вопросам просьба обращаться к @dsl1500.\n\nЖелаем удачного поиска!',
  becameBusyMessage: 'Вы изменили ваш статус на "Занят(а)". Это значит, что вы не будете получать задания, пока не изменить свой статус на "Доступен(а).',
  becameAvailableMessage: 'Вы изменили свой статус на "Доступен(а)".Вы будете получать задания, пока не измените свой статус на "Занят(а).',
  missingBecameBusyMessage: 'Вы изменили свой статус на "Занят(а). (/◔ ◡ ◔)/ Но это не имеет значение если  вы не заполнили профиль, так как не сможете получать задания.',
  missingBecameAvailableMessage: 'Вы изменили свой статус на "Доступен(а)".  (/◔ ◡ ◔)/ Но это не имеет значение если  вы не заполнили профиль, так как не сможете получать задания.',
  jobCreationSuccessMessage: 'Круто! Задание создано, мы отправили его вам ниже ⤵️',
  pickFreelancersMessage: 'Пожалуйста, выберите тех, кому отправить предложение о выполнении работы.',
  editBioMessage: 'Пожалуйста, введите информацию о себе (максимально 300 символов). Пишите коротко и ясно. Также можно добавить ссылку на свой профиль в социальных сетях.',
  selectCandidateMessage: 'Выберите исполнителя, кто вам нравится больше всего.',
  changedBioMessage: 'Отлично! Информация о Вас, которая будет видна работодателям:\n\n',
  notChangedBioMessage: 'Информация о вас не была изменена.\n\n',
  yourCurrentBio: 'Информация о вас, которая будет видна работодателям:',
  editHourlyRateMessage: 'Задания с какой оплатой вы хотите получать?',
  editLanguageMessage: 'На каких языках вы говорите? Вы будете получать задания, написанные только на этом языке.',
  pickCategoriesMessage: 'Выберите категории деятельности,в рамках которых Вы хотели бы сотрудничать.',
  suggestCategoryMessage: 'Предложить категорию',
  waitContractorResponseMessage: 'Вы отправили предложение выбранному исполнителю. Пожалуйста подождите пока он примет либо откажется от него, либо выберите другого исполнителя если вам надоело ждать.ℹ️',
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
  thisDraftIsRemoved: 'Вы не создали задание ✌️',
  shareProfile: 'Share profile',
  mainMenuOptions: {
    findJobs: '👤 Профиль',
    findContractors: '⛑ Задания',
    help: '❔ Помощь',
  },
  clientMenuOptions: {
    postNewJob: '🔨 Создать задание',
    myJobs: '🛠 Мои задания',
    back: '🔙 Назад',
  },
  freelanceMenuOptions: {
    editBio: '🖊 О себе',
    addBio: '🖊 О себе',
    editCategories: '📌 Категории',
    addCategories: '📌 Категории',
    editHourlyRate: '💲 Оплата',
    addHourlyRate: '💲 Оплата',
    back: '🔙 Назад',
    busy: '⚒ Занят(а)',
    available: '✅ Свободен(а)',
    addLanguage: '🇷🇺 Добавить язык',
  },
  hourlyRateOptions: [
    '0₽ – 50₽', '50₽ – 250₽', '250₽ – 500₽',
    '500₽ – 1000₽', '1000₽ – 5000₽',
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
  languageInline: 'lanI',
  adminBanInline: 'abI',
  freelancerInline: 'fI',
  freelancerPageInline: 'fPI',
  jobManageInline: 'jMI',
  freelancerJobInline: 'fJI',
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
  cancelBioEnterInline: 'cBEI',
  inputLanguageInline: 'iLI',
  inputSupercategoryNameInline: 'iSCNI',
  inputCategoryNameInline: 'iCNI',
  inputHourlyRateInline: 'iHRI',
  inputJobDescriptionInline: 'iJDI',
  inputBioCancelInline: 'iBCI',
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
    // todo: need to delete this later
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
    report: '❗️ Пожаловаться',
  },
  freelancerAcceptOptions: {
    accept: '✅ Принять',
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
