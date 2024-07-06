import "./pages/index.css";

import { initialCards } from "./scripts/cards.js";
import {
  createCard,
  removeCard,
  ImagePopup,
  buttonIsLiked,
} from "./components/card.js";
import {
  openModal,
  closeModal,
  closePopupOverlay,
} from "./components/modal.js";

// @todo: Темплейт карточки
export const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const placesList = document.querySelector(".places__list");

// Функция добавления новой карточки

const newPlace = document.forms["new-place"];

export function addNewCard(evt) {
  evt.preventDefault();

  const placeName = newPlace.elements["place-name"];
  const link = newPlace.elements.link;

  const item = {
    name: placeName.value,
    link: link.value,
  };

  const newCardElement = createCard(
    item,
    removeCard,
    ImagePopup,
    buttonIsLiked,
  );
  placesList.prepend(newCardElement);

  const popupOpened = document.querySelector(".popup_is-opened");
  closeModal(popupOpened);

  evt.target.reset();
}

const profile = document.querySelector(".profile");
const profileInfo = profile.querySelector(".profile__info");
const profileEditButton = profileInfo.querySelector(".profile__edit-button");
const profileAddButton = profile.querySelector(".profile__add-button");
const profileTitle = profileInfo.querySelector(".profile__title");
const profileDescription = profileInfo.querySelector(".profile__description");

const formElement = document.forms["edit-profile"];
const nameInput = formElement.elements.name;
const jobInput = formElement.elements.description;

const popupTypeNewCard = document.querySelector(".popup_type_new-card");
const popupTypeEdit = document.querySelector(".popup_type_edit");

newPlace.addEventListener("submit", addNewCard);

// Функция редактирования профиля
export function handleFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(popupTypeEdit);
}

formElement.addEventListener("submit", handleFormSubmit);

// Функция открытия поп-апа редактирования профиля нажатием на карандаш
profileEditButton.addEventListener("click", () => {
  openModal(popupTypeEdit);
});

// Функция открытия поп-апа добавления нового места нажатием на плюсик
profileAddButton.addEventListener("click", () => {
  openModal(popupTypeNewCard);
});

export const allPopups = document.querySelectorAll(".popup");

// Функция перебора всех поп-апов для удаления класса popup_is-opened
allPopups.forEach(function (item) {
  const popupCloseButton = item.querySelector(".popup__close");
  popupCloseButton.addEventListener("click", function () {
    closeModal(item);
  });
  item.addEventListener("click", closePopupOverlay);
  item.classList.add("popup_is-animated");
});

// @todo: Вывести карточки на страницу
initialCards.forEach(function (item) {
  const eachElement = createCard(
    item,
    removeCard,
    ImagePopup,
    buttonIsLiked,
    addNewCard,
  );
  placesList.append(eachElement);
});
