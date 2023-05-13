const textContainer = document.querySelector('#text-container');
let texts = ['text 1', 'text 2', 'text 3', 'text 4'];
let currentTextIndex = 0;

setInterval(() => {
  textContainer.innerHTML = texts[currentTextIndex];
  currentTextIndex = (currentTextIndex + 1) % texts.length;
}, 7000);