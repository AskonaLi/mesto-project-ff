// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(item, removeCard) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardTitle.textContent = item.name;

  deleteButton.addEventListener('click', removeCard);
  return cardElement;
}

// @todo: Функция удаления карточки
function removeCard(evt) {
  const listItem = evt.target.closest('.places__item');
  listItem.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function (item) {
  const eachElement = createCard(item, removeCard);
  placesList.append(eachElement);
});