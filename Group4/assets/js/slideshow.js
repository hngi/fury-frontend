let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
// console.log(slides, dots);
let prevButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');
let counter = 1;

showSlide(counter);

function showSlide(n) {
  var i;
  if (n === ((slides.length) - 1)) {
    nextButton.style.display = 'none';
  }
  if (n < ((slides.length) - 1)) {
    nextButton.style.display = 'block';
    prevButton.style.display = 'block';

  }
  if (n === 0) {
    prevButton.style.display = 'none';
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active-slide');
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active-dot');
  }
  slides[n].classList.add('active-slide');
  dots[n].classList.add("active-dot");

}
prevButton.addEventListener('click', () => {
  showSlide(counter - 1);
  console.log(counter);
  return counter--;
})
nextButton.addEventListener('click', () => {
  showSlide(counter + 1);
  console.log(counter);
  return counter++;
})
const carousel = () => {
  showSlide(counter);
  if (counter < ((slides.length) - 1)) {
    counter++;
  }
  else{
    counter=0;
  }
  setTimeout(carousel, 4000);
}
carousel();