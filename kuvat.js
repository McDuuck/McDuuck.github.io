const text = document.getElementById('text');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const header = document.querySelector('header');

let counter = 0;
const texts = ['Esittely teksti 1', 'Esittely teksti 2', 'Esittely teksti 3', 'Esittely teksti 4'];
const images = [
  'https://images.unsplash.com/photo-1667703795484-a187736411f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1674910249677-39dee04274cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
  'https://images.unsplash.com/photo-1669503467733-a21fb19c27bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80',
  'https://images.unsplash.com/photo-1658518815743-af2e2ff993af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'
];

text.textContent = texts[counter];
header.style.backgroundImage = `url(${images[counter]})`;

leftArrow.addEventListener('click', function () {
  counter--;
  if (counter < 0) {
    counter = texts.length - 1;
  }
  text.textContent = texts[counter];
  header.style.backgroundImage = `url(${images[counter]})`;
});

rightArrow.addEventListener('click', function () {
  counter++;
  if (counter >= texts.length) {
    counter = 0;
  }
  text.textContent = texts[counter];
  header.style.backgroundImage = `url(${images[counter]})`;
});

document.querySelector("h1").style.transition = "none";