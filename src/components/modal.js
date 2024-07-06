import { allPopups } from "../index.js";

// Функция добавления класса popup_is-opened
export function openModal(item) {
  item.classList.add("popup_is-opened");
  document.addEventListener("keydown", closeByEsc);
}

// Функция удаления класса popup_is-opened
export function closeModal(item) {
  item.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeByEsc);
}

// Функция закрытия через Esc
export function closeByEsc(evt) {
  if (evt.key === "Escape") {
    allPopups.forEach(function (item) {
      if (item.classList.contains("popup_is-opened")) {
        closeModal(item);
      }
    });
  }
}

export function closePopupOverlay(evt) {
  if (evt.currentTarget === evt.target) {
    closeModal(evt.target);
  }
}
