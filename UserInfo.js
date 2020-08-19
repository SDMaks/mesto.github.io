class UserInfo {
  constructor(name, about, userTitle, userInfoJob) {
    this.nameProfile = name;
    this.aboutProfile = about;
    this.title = userTitle;
    this.subtitle = userInfoJob;
  }

  setUserInfo = () => {
    this.name = this.nameProfile.value;
    this.about = this.aboutProfile.value;
    this.updateUserInfo(this.name, this.about);
  };

  updateUserInfo(name, about) {
    this.title.textContent = name;
    this.subtitle.textContent = about;
  }

  inputTitle() {
    this.name = this.nameProfile;
    this.about = this.aboutProfile;
    this.name.value = this.title.innerText;
    this.about.value = this.subtitle.innerText;
  }
}
