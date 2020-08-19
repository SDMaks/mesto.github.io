
class Popup {
    constructor(popUp, popupButton) {
      this.popupButton = popupButton;
      this.popup = popUp;
    }
  
    
    closeEvent() {    
      this.popupButton.addEventListener("click", () => {
        this.close();
      });
         
      this.closeEsc();   
    }
    
    openEvent(){
      this.popup.classList.toggle("popup_is-opened");

    }
    
  
    closeEsc() {
      /** Можно лучше:
       * 
       * Перменная popupFormClose объявлена, но не используется
       */
      
      document.addEventListener("keydown", (event) => {
        if (event.keyCode === 27) {
          /** Можно лучше:
           * 
           * Дублиррвание кода из метода close. Чтобы не дублировать код, можно просто вызвать здесь метод close
           */
          
          this.close()
        }
      });
    }
  
    close(){
      this.popup.classList.remove("popup_is-opened");
      this.removeEventListeners()
    };
  
  removeEventListeners(){
    document.removeEventListener("keydown", this.closeEsc);
    this.popupButton.removeEventListener("click", this.close)
  }


  
  }