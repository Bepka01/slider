const sliderWrapper = document.querySelector(".slider__block");
const inputValue = document.querySelector(".value");
const inputSlide = document.querySelector(".slide");
const btnAgree = document.querySelector(".agree");
const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");

let swiper = null;

function createSliderWithSwiper() {
  const valueInput = parseInt(inputValue.value) || 5;
  const slidesPerView = parseInt(inputSlide.value) || 3;

  sliderWrapper.innerHTML = "";

  const swiperContainer = document.createElement("div");
  swiperContainer.className = "swiper";

  const swiperWrapper = document.createElement("div");
  swiperWrapper.className = "swiper-wrapper";

  for (let i = 0; i < valueInput; i++) {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = `
      <div class="card text-bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">Блок № ${i + 1}</div>
        <div class="card-body">
          <h5 class="card-title">Заголовок карточки ${i + 1}</h5>
          <p class="card-text">Содержимое карточки ${i + 1}</p>
        </div>
      </div>
    `;
    swiperWrapper.appendChild(slide);
  }

  swiperContainer.appendChild(swiperWrapper);
  sliderWrapper.appendChild(swiperContainer);

  if (swiper !== null) {
    swiper.destroy(true, true);
  }

  swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: slidesPerView,
    slidesPerGroup: slidesPerView, // ✅ Возвращаем групповой свайп
    loop: false,
    spaceBetween: 20,
    initialSlide: 0,
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    on: {
      slideChange: function () {
        // ✅ Показываем какие слайды видны
        const activeIndex = this.realIndex;
        const visible1 = activeIndex + 1;
        const visible2 = activeIndex + 2;
        const visible3 = activeIndex + 3;
        console.log(
          `Активный: ${visible1}, Видимые: ${visible1}, ${visible2}, ${visible3}`
        );
      },
    },
  });

  console.log(
    "Swiper создан:",
    valueInput,
    "слайдов, свайп группами по:",
    slidesPerView
  );
}

btnAgree.addEventListener("click", createSliderWithSwiper);

btnNext.addEventListener("click", function () {
  if (swiper !== null) {
    swiper.slideNext();
  }
});

btnPrev.addEventListener("click", function () {
  if (swiper !== null) {
    swiper.slidePrev();
  }
});
