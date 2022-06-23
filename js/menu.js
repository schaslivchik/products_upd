/**
 * button, menu
 */
const btnMenu = document.querySelector('.menu-sm-btn ');
const menuMobile = document.querySelector('.nav')

btnMenu.addEventListener('click', function(){
  this.classList.toggle('btn-danger')
  menuMobile.classList.toggle('active-menu')
  if( this.innerText === 'Close'){
    this.innerText = 'Menu'
  } else {
    this.innerText = 'Close'
  }
})


/**
 * audio, stop play audi when click other audio file
 */
function audioPlay(e) {
const audioFiles = document.querySelectorAll('audio')
e.classList.add('play-audio')
  audioFiles.forEach(function(audio) {
      if(audio.classList.contains('play-audio')){
      audio.play() 
      e.classList.remove('play-audio')
      } else {
      audio.pause()
      audio.currentTime = 0;
      }
    })
}



