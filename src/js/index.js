(function () {
  const openBtnPopUpError = [...document.querySelectorAll('.Btn__comeIn')];
  const closeBtnPopUpError = document.querySelector('.Btn__close');

  const popUp = document.querySelector('.Error');

  if (openBtnPopUpError && closeBtnPopUpError) {
    openBtnPopUpError.map(item => {
      item.addEventListener('click', openPopUp)
    });
    closeBtnPopUpError.addEventListener('click', closePopUp)

    function openPopUp() {
      popUp.classList.add('PopUp__show')
    }
    function closePopUp() {
      popUp.classList.remove('PopUp__show')
    }
  }
})();


(function () {
  const openBtnPopUpPhoto = document.querySelector('.OpenPhotoPopUp');
  const closeBtnPopUpPhoto = document.querySelector('.Btn__close');
  const popUp = document.querySelector('.Photo');

  if (openBtnPopUpPhoto && closeBtnPopUpPhoto) {

    openBtnPopUpPhoto.addEventListener('click', openPopUp)
    closeBtnPopUpPhoto.addEventListener('click', closePopUp)
    function openPopUp() {
      popUp.classList.add('PopUp__show')
    }
    function closePopUp() {
      popUp.classList.remove('PopUp__show')
    }
  }
})();

(function () {
  const openBtnPopUpPhoto = document.querySelector('.HeaderTaskPage .Btn__takeInPlay');
  const closeBtnPopUpPhoto = document.querySelector('.Btn__close');
  const popUp = document.querySelector('.Enrollment');

  if (openBtnPopUpPhoto && closeBtnPopUpPhoto) {

    openBtnPopUpPhoto.addEventListener('click', openPopUp)
    closeBtnPopUpPhoto.addEventListener('click', closePopUp)
    function openPopUp() {
      popUp.classList.add('PopUp__show')
    }
    function closePopUp() {
      popUp.classList.remove('PopUp__show')
    }
  }
})();

(function () {
  const openBtnPopUpPhoto = document.querySelector('#ShowRules');
  const closeBtnPopUpPhoto = document.querySelector('.Btn__close');
  const popUp = document.querySelector('.RulesPopup');

  if (openBtnPopUpPhoto && closeBtnPopUpPhoto) {

    openBtnPopUpPhoto.addEventListener('click', openPopUp)
    closeBtnPopUpPhoto.addEventListener('click', closePopUp)
    function openPopUp() {
      popUp.classList.add('PopUp__show')
    }
    function closePopUp() {
      popUp.classList.remove('PopUp__show')
    }
  }
})();




