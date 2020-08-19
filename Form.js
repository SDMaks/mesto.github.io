class Form {
  constructor(
    validator,
    template,
    buttonPopUp,
    buttonArr,
    profileSubmit,
    inputTitle,
    popUp,
    inputs,
    formProfile
  ) {
    this.validator = validator;
    this.template = template;
    this.button = buttonPopUp;
    this.Arr = buttonArr;
    this.profileSubmit = profileSubmit;
    this.inputTitle = inputTitle;

    this.popUp = popUp;
    this.inputs = inputs;
    this.formProfile = formProfile;
  }

  render() {
    this.view = this.template;
    this.button = this.button;
    this.Arr = this.Arr;

    const validator = new this.validator(this.view, this.button, this.Arr);
    validator.setEventListeners(
      this.popUp,
      this.inputs,
      this.formProfile,
      this.inputTitle
    );
  }
  submit = (event) => {
    event.preventDefault();

    this.profileSubmit();
  };

  setEventListeners() {
    this.template.addEventListener("submit", () => {
      this.submit(event);
      this.removeEventListeners();
    });
    this.button.addEventListener("click", () => {
      
      this.removeEventListeners();
    });
  }

  removeEventListeners() {
    this.template.removeEventListener("submit", this.submit);
    this.button.removeEventListener("click", this.title);
  }
}
