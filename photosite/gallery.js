const gallerySlide = document.querySelector('.gallery-slide');
const galleryImages = document.querySelectorAll('.gallery-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = galleryImages[0].clientWidth;

gallerySlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
  if(counter >= galleryImages.length-1) return;
  gallerySlide.style.transition = "transform 1s ease-in-out";
  counter++;
  gallerySlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
  if(counter <= 0) return;
  gallerySlide.style.transition = "transform 1s ease-in-out";
  counter--;
  gallerySlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
});

gallerySlide.addEventListener('transitionend', () => {
  if(galleryImages[counter].id === 'lastClone'){
    gallerySlide.style.transition = "none";
    counter = galleryImages.length - 2;
    gallerySlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if(galleryImages[counter].id === 'firstClone'){
    gallerySlide.style.transition = "none";
    counter = galleryImages.length - counter;
    gallerySlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});
