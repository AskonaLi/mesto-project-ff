// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function addCard(item, removeButton) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');

  cardElement.querySelector('.card__image').src = item.link;
  cardElement.querySelector('.card__image').alt = item.name;
  cardElement.querySelector('.card__title').textContent = item.name;

  deleteButton.addEventListener('click', removeButton);
  return cardElement;
}

// @todo: Функция удаления карточки
function removeButton(evt) {
  const listItem = evt.target.closest('.places__item');
  listItem.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function (item) {
  const eachElement = addCard(item, removeButton);
  placesList.append(eachElement);
});