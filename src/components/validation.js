export const popupFormElement = document.querySelector('.popup__form');
const popupInput = popupFormElement.querySelector('.popup__input');

// Функция, которая добавляет класс с ошибкой
 const showInputError = (popupFormElement, popupInput, errorMessage, validationConfig) => {
  const formError = popupFormElement.querySelector(`.${popupInput.id}-error`);
  popupInput.classList.add(validationConfig.inputErrorClass);
  formError.textContent = errorMessage;
  formError.classList.add(validationConfig.errorClass);
};

// Функция, которая удаляет класс с ошибкой
 export const hideInputError = (popupFormElement, popupInput, validationConfig) => {
  const formError = popupFormElement.querySelector(`.${popupInput.id}-error`);
  popupInput.classList.remove(validationConfig.inputErrorClass);
  if (formError) {
    formError.classList.remove(validationConfig.errorClass);
    formError.textContent = '';
  }
};

// Функция, которая проверяет валидность поля
const isValid = (popupFormElement, popupInput, validationConfig) => {
  if (popupInput.validity.patternMismatch) {
    popupInput.setCustomValidity(popupInput.dataset.errorMessage);
  } else {
    popupInput.setCustomValidity("");
  }

  if (!popupInput.validity.valid) {
    showInputError(popupFormElement, popupInput, popupInput.validationMessage, validationConfig);
  }
  else {
    hideInputError(popupFormElement, popupInput, validationConfig);
  }
};

// Функция, которая обрабатывает все инпуты 
const setEventListeners = (popupFormElement, validationConfig) => {
  const inputList = Array.from(popupFormElement.querySelectorAll(validationConfig.popupInput));
  const buttonElement = popupFormElement.querySelector(validationConfig.buttonElement);
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((popupInput) => {
    popupInput.addEventListener('input', () => {
      isValid(popupFormElement, popupInput, validationConfig);
      toggleButtonState(inputList, buttonElement, validationConfig);
    });
  });
};

// Функция, которая добавляет слушатель на все формы
export const enableValidation = (validationConfig) => {
  const formList = Array.from(document.querySelectorAll((validationConfig.popupFormElement)));
  formList.forEach((popupFormElement) => {
    popupFormElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(popupFormElement, validationConfig)
  });
};

// Функция, которая ищет хотя-бы одно невалидное поле
const hasInvalidInput = (inputList) => {
  return inputList.some((popupInput) => {
    return !popupInput.validity.valid;
  })
}

// Функция, которая активирует или деактивирует кнопку
const toggleButtonState = (inputList, buttonElement, validationConfig) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделаем кнопку неактивной
    buttonElement.disabled = true;
    // buttonElement.classList.add(validationConfig.inactiveButtonClass);
  } else {
    // иначе сделаем кнопку активной
    buttonElement.disabled = false;
    // buttonElement.classList.remove(validationConfig.inactiveButtonClass);
  }
};

export const clearValidation = (popupFormElement, validationConfig) => {
  const inputList = Array.from(popupFormElement.querySelectorAll(validationConfig.popupInput));
  const buttonElement = popupFormElement.querySelector(validationConfig.buttonElement);

  inputList.forEach((popupInput) => {
    hideInputError(popupFormElement, popupInput, validationConfig);
  });

  toggleButtonState(inputList, buttonElement, validationConfig);
};

export const clearState = (popupFormElement) => {
  const inputList = Array.from(popupFormElement.querySelectorAll(validationConfig.popupInput));
  inputList.forEach((popupInput) => {
    popupInput.value = '';
  });
}

export const validationConfig = ({
  popupFormElement: '.popup__form',
  popupInput: '.popup__input',
  buttonElement: '.popup__button',
  inactiveButtonClass: '.popup__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
});