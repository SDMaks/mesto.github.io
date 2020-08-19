class PopupImage extends Popup {
    constructor(popUp, popupButton, placesList, imagePopUpCard) {
      super(popUp, popupButton)
      this.placesList = placesList;
      this.image = imagePopUpCard;
      this.popUp=popUp
      
    }
  
    setEventListeners() {
      this.placesList.addEventListener("click", (event) => {
        this.openImage(event);
  this.removeEventListeners()
        
      });
      
    }
  
    /** Надо исправить:
     * 
     * Некорректно отображается картинка при открытии в большом разрешении 
     * - т.е при клике на карточку, картинка должна
     * открываться в полном размере (не обрезаться и соответствовать ширине 
     * и высоте исходного изображения).
     *  
     * Для того, чтобы корректно реализовать данный функционал можно воспользоваться 
     * методом .slice - извлекаеть src 
     * изображения из background-image с использованием .slice(), 
     * либо другим удобным Вам способом. Главное -
     * чтобы изображение не искажалось.
     */
    openImage = (event) => {
      
      if (event.target.closest(".place-card__image")) {
        //this.image.style = event.target.getAttribute("style");
        this.image.src = event.target.style.backgroundImage.slice(5, -2);
        
        /** Надо исправить:
         * 
         * Открытие попапа - т.е метод open должен быть реализован 
         * в классе Popup, дальше в классах PopupForm и PopupImage можно будет
         * использовать этот метод как метод родительского класса 
         * используя ключевое слово super
         */
        //this.popUp.classList.toggle("popup_is-opened");
        super.openEvent()
      }
  
      };
  
  removeEventListeners(){
  this.placesList.removeEventListener("click", (event) => {
        this.openImage(event);
  })
  }
   
  }