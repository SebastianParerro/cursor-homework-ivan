'use strict';

function playSoundBykey(key) {
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  const keyElement = document.querySelector(`.key[data-key="${key}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  keyElement.classList.add('playing');
}
const keys = document.querySelectorAll('.keys>div[data-key]');
keys.forEach(key => {
  key.addEventListener('click', event => {
    playSoundBykey(event.currentTarget.dataset.key);
  })
  key.addEventListener('transitionend', event => {
    event.currentTarget.classList.remove('playing');
  })
})
window.addEventListener('keydown', (event) => {
  playSoundBykey(event.keyCode);
});