import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
  }

  _getInputValues() {
    const values = {};
    this._inputList.forEach((input) => {
      //add a key/value pair to the values object for each input
      //the key is input.name
      //the value is input.value
      //need to use brackets notation
    });
    return values;
    console.log(this._inputList);
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();

      //Pass result of getInputValues to submission handler
      this._handleFormSubmit(evt);
    });
  }
}
