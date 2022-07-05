const alertBanner = document.querySelector('.alert-banner');
const focusBtnLeft = document.querySelector('.carousel-control-next')
focusBtnLeft.focus()

document.addEventListener("keydown", function (event) {
  if (event.which === 122) {
    focusBtnLeft.focus();
    alertBanner.classList.add('active-banner');
  }
})



const slideVideos = document.querySelectorAll('video')
const myCarousel = document.getElementById('carouselExampleInterval')
myCarousel.addEventListener('slide.bs.carousel', function () {
   slideVideos.forEach(e => e.pause());
})
myCarousel.addEventListener('slid.bs.carousel', function () {
  const activeSlide = document.querySelector('.active')
  if(activeSlide.dataset.bsTarget) {
    activeSlide.querySelector('video').play()
  } 
 })

