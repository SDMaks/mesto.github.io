class CardList {
    constructor(initialCards, createCardFunction) {
      this._initialCards = initialCards;
      this._createCardFunction = createCardFunction;
      /** Надо исправить:
       * 
       * Удалить лишние параметры из конструктора. Метод constructor этого класса должен принимать два аргумента:
       * DOM-элемент — контейнер, куда нужно складывать карточки и массив карточек, которые будут на странице при загрузке.
       */
     // this._popUpCard = popUpCard;
     // this.addButton = button
    }
  
   cardList = (body, element) =>{

    this._view = document.createElement("div");
    this._view.classList.add("places-list");
    this._view.classList.add("root__section");
   
   body.insertBefore(this._view, element);
   
   
   }

    render() {
      this._initialCards.forEach((item) => {
        this.add(item.link, item.name)      
      });
    }
  
    add = (image, description) => {       
        this.card = this._createCardFunction(image, description).create();
        this._view.appendChild(this.card)

    }
  }