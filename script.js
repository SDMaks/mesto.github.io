!(function () {
  const root = document.querySelector(".root");

  const addButton = root.querySelector(".user-info__button"); //выбираем кнопку добавления карточки

  const popUpClose = root.querySelector("#close-card"); //переменная кнопки закрытия всплывающего окна
  const popUpButton = root.querySelector("#popup__button");

  const buttonAddForms = root.querySelectorAll(".popup__button");
  const formCardImage = document.forms.new; //Переменная формы

  const description = formCardImage.elements.name; // переменная для ввода названия
  const image = formCardImage.elements.link; // переменная поля ввода адреса ссылки

  /*//////////////////////*/

  const popUpCard = root.querySelector("#popup-card");
  const popUpProfile = root.querySelector("#popup-profile"); //кнопка закрытия профиля

  const editProfileButton = root.querySelector(".user-info-profile__button");
  const buttonCloseProfile = root.querySelector("#close-profile"); //кнопка закрытия профиля

  const formProfile = document.forms.newProfile;

  const nameProfile = formProfile.elements.nameprofile; // переменная для ввода имени профиля
  const aboutProfile = formProfile.elements.about; // переменная для ввода описания профиля

  const userTitle = root.querySelector(".user-info__name"); //переменная заголовка пользователя
  const userInfoJob = root.querySelector(".user-info__job"); //переменная подзаголовка  описании профессии пользователя

  const placeCardImage = root.querySelector(".place-card__image");

  const imagePopup = root.querySelector("#popup-image");
  const imagePopUpCard = root.querySelector(".image-popup__card");

  const buttonCloseImage = root.querySelector("#close-image");

  const inputs = root.querySelectorAll(".popup__input-error-message");
  const inputsArr = Array.from(inputs);

  const upDateProfile = new UserInfo(
    nameProfile,
    aboutProfile,
    userTitle,
    userInfoJob
  );

  // функция создания  карточки ++++++++++++++++++++++++

  const createCardFunction = (imageValue, descriptionValue) =>
    new Card(imageValue, descriptionValue);

  const list = new CardList(
    initialCards,
    createCardFunction
  );

  list.cardList(root, popUpProfile);

  list.render();
  formCardImage.addEventListener("submit", function (event) {
    event.preventDefault();
    list.add(image.value, description.value);
  });

  popUpButton.setAttribute("disabled", true);

  //функционал по инпутам в формах

  const placesList = document.querySelector(".places-list");

  profileSubmit = () => {
    upDateProfile.setUserInfo();
  };
  const PopImage = new PopupImage(
    imagePopup,
    buttonCloseImage,
    placesList,
    imagePopUpCard
  );
  PopImage.setEventListeners();
  PopImage.closeEvent();

  const PopCard = new PopupForm(
    popUpCard,
    popUpClose,
    addButton,
    formCardImage
  );
  PopCard.setEventListeners();
  PopCard.closeEvent();

  const PopProfile = new PopupForm(
    popUpProfile,
    buttonCloseProfile,
    editProfileButton,
    formProfile
  );
  PopProfile.setEventListeners();
  PopProfile.closeEvent();

  inputTitle = () => {
    upDateProfile.inputTitle();
  };

  const form = new Form(
    Validation,
    formProfile,
    editProfileButton,
    buttonAddForms,
    profileSubmit,
    inputTitle,
    popUpProfile,
    inputsArr,
    formCardImage
  );
  form.render();

  form.setEventListeners();

  const formCard = new Form(
    Validation,
    formCardImage,
    addButton,
    buttonAddForms,
    profileSubmit,
    inputTitle,
    popUpCard,
    inputsArr,
    formCardImage
  );
  formCard.render();
})();



