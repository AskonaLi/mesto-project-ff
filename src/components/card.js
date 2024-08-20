import {deleteCardServer, putLike, deleteLike} from "./api.js";

// @todo: Темплейт карточки
export const cardTemplate = document.querySelector("#card-template").content;

// @todo: Функция создания карточки
export function createCard(
  cardTemplate,
  item,
  openImagePopup,
  isCardOwner
) {
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");

  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const likesCounter = cardTemplate.querySelector(".likes__counter");


  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardTitle.textContent = item.name;
  likesCounter.textContent = item.likes.length


  if (isCardOwner) {
    deleteButton.addEventListener("click", (evt) => removeCard(evt, item._id));
  } else {
    deleteButton.classList.add('inactive')
  }

  cardImage.addEventListener("click", function () {
    openImagePopup(item);
  });

  if (item.likes.some((like) => like.id === item._id)) {
    cardLikeButton.addEventListener("click", likedButton);
  }


  return cardElement;
}

// @todo: Функция удаления карточки
export function removeCard(evt, id) {
  deleteCardServer(id).then(() => {
    const listItem = evt.target.closest(".places__item");
    listItem.remove();
  })
  }

// Функция лайка
export function likedButton(evt, putId, deleteId) {
  evt.target.classList.toggle("card__like-button_is-active");
}
