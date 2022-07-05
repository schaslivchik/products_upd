const alertBanner = document.querySelector('.alert-banner');
const focusBtnLeft = document.querySelector('.carousel-control-next')
focusBtnLeft.focus()

document.addEventListener("keydown", function (event) {
  if (event.which === 122) {
    focusBtnLeft.focus();
    alertBanner.classList.add('active-banner');
  }
})


