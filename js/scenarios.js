
const slideVideos = document.querySelectorAll('video')
const myCarousel = document.getElementById('carouselExampleControls')
const activeItem = document.querySelector('.carousel-item')
const focusBtnLeft = document.querySelector('.carousel-control-next')
const titleBlock = document.querySelector('.focus-block')

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
    titleBlock.focus();
    activeItem.classList.add('active')
    titleBlock.classList.add('title-block-hide')
    titleBlock.style.display = 'block'
  }
})

titleBlock.addEventListener('click', function(){
titleBlock.style.display = 'none'
})