// Данные для успешной авторизации на сервере
export const config = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-20',
  headers: {
    authorization: '4ae982e8-2b2c-468a-80fa-ed13fba03bc0'
  }
}

// Функция обработки ответа от сервера
export const getResponse = (result) => {
  if (result.ok) {
    return result.json();
  }
  return Promise.reject(`Ошибка: ${result.status}`)
}

// Функция загрузки информации о пользователе с сервера
export function loadingProfileInfo() {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'GET',
    headers: config.headers
  })
  .then(getResponse)
};

// Функция загрузки карточек с сервера
export function loadingCardsInfo() {
  return fetch(`${config.baseUrl}/cards `, {
    method: 'GET',
    headers: config.headers
  })
  .then(getResponse)
  }

// Функция редактирования профиля с сервера
  export function patchEditProfile(nameInput, jobInput) {
    return fetch(`${config.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: '4ae982e8-2b2c-468a-80fa-ed13fba03bc0',
        'Content-Type': 'application/json'
        },
      body: JSON.stringify({
        name: nameInput,
        about: jobInput
      })
  })
  }

// Функция отправки данных карточки на сервер
  export function postNewCard(placeName, link) {
    return fetch(`${config.baseUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: '4ae982e8-2b2c-468a-80fa-ed13fba03bc0',
        'Content-Type': 'application/json'
        },
      body: JSON.stringify({
        name: placeName,
        link: link
      })
    })
    .then(getResponse)
  }

// Функция загрузки лайков
  export function loadingLikesQuantity() {
    return fetch(`${config.baseUrl}/cards`, {
      method: 'GET',
      headers: config.headers
    })
    .then(getResponse)
  }

// Функция удаления карточки с сервера
  export function deleteCardServer(id) {
    return fetch(`${config.baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: config.headers
    })
    .then(getResponse)
  }

// Функция постановки лайка
  export function putLike(putId) {
    return fetch(`${config.baseUrl}/cards/likes/${id}`, {
      method: 'PUT',
      headers: {
        authorization: '4ae982e8-2b2c-468a-80fa-ed13fba03bc0',
        'Content-Type': 'application/json'
        },
  })
  .then(getResponse)
  }

// Функция удаления лайка
  export function deleteLike(deleteId) {
    return fetch(`${config.baseUrl}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: config.headers
    })
    .then(getResponse)
  }