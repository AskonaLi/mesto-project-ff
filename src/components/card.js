import { openModal } from "./modal.js";
import { cardTemplate } from "../index.js";

// @todo: Функция создания карточки
export function createCard(item, removeCard, ImagePopup, buttonIsLiked) {
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");

  const cardLikeButton = cardElement.querySelector(".card__like-button");

  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardTitle.textContent = item.name;

  deleteButton.addEventListener("click", removeCard);

  cardImage.addEventListener("click", function () {
    ImagePopup(item);
  });

  cardLikeButton.addEventListener("click", buttonIsLiked);

  return cardElement;
}

// @todo: Функция удаления карточки
export function removeCard(evt) {
  const listItem = evt.target.closest(".places__item");
  listItem.remove();
}

// Функция открытия поп-апа для картинок
const popupTypeImage = document.querySelector(".popup_type_image");
const popupImage = popupTypeImage.querySelector(".popup__image");

export function ImagePopup(image) {
  const popupCaption = popupTypeImage.querySelector(".popup__caption");

  popupImage.src = image.link;
  popupImage.alt = image.name;
  popupCaption.textContent = image.name;
  openModal(popupTypeImage);
}

// Функция лайка
export function buttonIsLiked(evt) {
  if (evt.target.classList.contains("card__like-button_is-active")) {
    evt.target.classList.remove("card__like-button_is-active");
  } else {
    evt.target.classList.add("card__like-button_is-active");
  }
}
