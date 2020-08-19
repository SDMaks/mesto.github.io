class PopupForm extends Popup {
  constructor(popUp, popupButton, addButton, form) {
    super(popUp, popupButton)
    
    this.addButton = addButton;
    this.form = form;   
    
  }

  /** Надо исправить:
   * 
   * Названия методов должны быть описательными и отражать функционал метода + начинаться с маленькой буквы, заменить Event 
   * например на setEventListeners
   */
  setEventListeners() {
    
    this.addButton.addEventListener("click", () => {
      //this.open();
      super.openEvent()
   this.removeEventListeners()
     
    });

this.form.addEventListener("submit", (event) => {
 

      event.preventDefault();
      super.close();
      this.removeEventListeners()
    });
  }

  /** Надо исправить:
   * 
   * Метод open должен быть реализован в классе Popup, дальше в классах PopupForm и PopupImage можно будет использовать этот
   * метод как метод родительского класса используя ключевое слово super
   */
  /*open = () => {
    this.popup.classList.add("popup_is-opened");
   
  };*/

removeEventListeners(){
this.addButton.removeEventListener("click", super.close);
this.addButton.removeEventListener("click", super.openEvent);
}

}