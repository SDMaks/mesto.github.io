class Card {
    constructor(imageValue, descriptionValue) {
      this.imageValue = imageValue;
      this.descriptionValue = descriptionValue;
    }
  

    create = () => {
      const placeCard = document.createElement("div"); //контейнер с карточкой
      placeCard.classList.add("place-card"); // контейнеру присваиваем класс
  
      const placeCardImage = document.createElement("div");
      placeCardImage.classList.add("place-card__image"); // куда добавляем путь к картинке
  
      placeCardImage.style.backgroundImage = `url(${this.imageValue})`;
  
      const buttonDelete = document.createElement("button");
      buttonDelete.classList.add("place-card__delete-icon");
  
      const placeCardDescription = document.createElement("div");
      placeCardDescription.classList.add("place-card__description");
  
      const placeCardName = document.createElement("h3");
      placeCardName.classList.add("place-card__name"); // куда вставляем описание картинки
      placeCardName.textContent = this.descriptionValue;
  
      const buttonLike = document.createElement("button");
      buttonLike.classList.add("place-card__like-icon");
  
      placeCard.appendChild(placeCardImage);
      placeCardImage.appendChild(buttonDelete);
  
      placeCard.appendChild(placeCardDescription);
      placeCardDescription.appendChild(placeCardName);
      placeCardDescription.appendChild(buttonLike);
  
      this._view = placeCard;
      
      this.setEventListeners()
      return this._view
    }

   setEventListeners(){
    /** Можно лучше:
     * 
     * Найти элементы с классами place-card__like-icon и place-card__delete-icon один раз в методе create, вынести в константы
     * и переиспользовать в методах setEventListeners и removeEventListeners, а не искать их несколько раз
     * в каждом из методов
     */
    this._view.querySelector('.place-card__like-icon').addEventListener('click', this.like);
    this._view.querySelector(".place-card__delete-icon").addEventListener("click", this.remove)
   }
 
 like(event) {
    event.target.classList.toggle("place-card__like-icon_liked");   
  }
    
  remove = (event) => {
        /** Можно лучше:
         * 
         * Убрать условие проверки, она здесь не нужна, значительно сократит количество кода
         */
        if (event.target.className === "place-card__delete-icon") {
          event.stopPropagation();
           
         event.target.closest('.place-card').remove();
     
        }
        this.removeEventListeners();
        
    }

    removeEventListeners = () => {
      this._view.querySelector('.place-card__like-icon').removeEventListener('click', this.like);
      this._view.querySelector(".place-card__delete-icon").removeEventListener("click", this.remove)
     }
    
  }

  