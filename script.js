const sliderWrapper = document.querySelector(".slider__block");
const inputValue = document.querySelector(".value");
const inputSlide = document.querySelector(".slide");
const btnAgree = document.querySelector(".agree");
const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");
const deleteBtn = document.querySelector(".delete");

function createSliderItem() {
  const blockItem = document.createElement("div");
  blockItem.classList.add("slider__item");
  sliderWrapper.appendChild(blockItem);
  return blockItem;
}

function createSlide() {
  let valueInput = parseInt(inputValue.value);
  console.log("Создаю слайдов:", valueInput);
  for (let i = 0; i < valueInput; i++) {
    createSliderItem();
  }
}

function deleteSlide() {
  const allSlides = document.querySelectorAll(".slider__item");
  if (allSlides.length === 0) {
    return;
  }
  allSlides.forEach((slide) => {
    slide.remove();
  });
}

btnNext.addEventListener("click", function () {
  const slide = sliderWrapper.querySelector(".slider__item");
  if (!slide) return;
  const slideToScroll = parseInt(inputSlide.value) || 1;
  const gap = 20;
  const slideWidth = slide.offsetWidth;
  const scrollLength = (slideWidth + gap) * slideToScroll;

  sliderWrapper.scrollLeft += scrollLength;
});

btnPrev.addEventListener("click", function () {
  const slide = sliderWrapper.querySelector(".slider__item");
  if (!slide) return;
  const slideToScroll = parseInt(inputSlide.value) || 1;
  const gap = 20;
  const slideWidth = slide.offsetWidth;
  const scrollLength = (slideWidth + gap) * slideToScroll;

  sliderWrapper.scrollLeft -= scrollLength;
});
deleteBtn.addEventListener("click", deleteSlide);
btnAgree.addEventListener("click", createSlide);
