const sliderWrapper = document.querySelector(".slider__block");
const inputValue = document.querySelector(".value");
const inputSlide = document.querySelector(".slide");
const btnAgree = document.querySelector(".agree");
const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");
const deleteBtn = document.querySelector(".delete");

function createSliderItem() {
  const blockItem = document.createElement("div");
  blockItem.textContent = `Блок № ${sliderWrapper.children.length + 1}`;
  blockItem.classList.add("slider__item");
  sliderWrapper.appendChild(blockItem);
  return blockItem;
}

function createSlide() {
  deleteSlide();
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

function scrollSlide(side) {
  const slide = sliderWrapper.querySelector(".slider__item");
  if (!slide) return;
  const slideToScroll = parseInt(inputSlide.value) || 1;
  const gap = 20;
  const slideWidth = slide.offsetWidth;
  const scrollLength = (slideWidth + gap) * slideToScroll;

  sliderWrapper.scrollLeft += scrollLength * side;
}

btnNext.addEventListener("click", function () {
  scrollSlide(1);
});

btnPrev.addEventListener("click", function () {
  scrollSlide(-1);
});
btnAgree.addEventListener("click", createSlide);
