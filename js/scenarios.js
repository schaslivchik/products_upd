
const slideVideos = document.querySelectorAll('video')
const myCarousel = document.getElementById('carouselExampleControls')
const activeItem = document.querySelector('.carousel-item')
const bgScenario = document.querySelector('.alert-banner-scenarion')

myCarousel.addEventListener('slide.bs.carousel', function () {
   slideVideos.forEach(e => e.pause());
})
myCarousel.addEventListener('slid.bs.carousel', function () {
  const activeSlide = document.querySelector('.active')
  if(activeSlide.dataset.bsTarget) {
    activeSlide.querySelector('video').currentTime = 0;
    activeSlide.querySelector('video').play()
  } 
 })
 document.addEventListener("keydown", function (event) {
  if (event.which === 122) {
    activeItem.classList.add('active')
    bgScenario.remove();
  }
})

