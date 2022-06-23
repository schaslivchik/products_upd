const btnClose = document.querySelectorAll('.btn-close')
const btnsPlay = document.querySelectorAll('.btn-play')
const video = document.querySelectorAll('video');

btnsPlay.forEach(e => {
  e.addEventListener('click', function () {
    e.nextElementSibling.querySelector('video').play()
  })
})
btnClose.forEach(e => {
  e.addEventListener('click', function () {
    e.nextElementSibling.querySelector('video').pause()
  })
})
document.addEventListener("keydown", function (event) {
  if (event.which === 27) {
    video.forEach(e => e.pause());
  }
})





