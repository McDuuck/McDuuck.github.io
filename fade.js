const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    header.style.backgroundSize = '11vmin 11vmin';
    header.style.opacity = 0.5;
  });
  
  item.addEventListener('mouseout', () => {
    header.style.backgroundSize = '11vmin 11vmin';
    header.style.opacity = 1;
  });
});