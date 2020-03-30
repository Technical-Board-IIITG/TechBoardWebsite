// Carousel
var carouselSlide = document.querySelector(".carousel__slide");
var carouselItems = document.querySelectorAll(".carousel__item");
var carouselDots = document.querySelectorAll(".carousel__dots > li");

// Buttons
var prevBtn = document.querySelector(".carousel__button--prev");
var nextBtn = document.querySelector(".carousel__button--next");

// Counter
var Item_length = carouselDots.length;
var size = carouselItems[0].clientWidth;
var progress = false; // prevent double click on arrow
var easeInOutExpo = "cubic-bezier(.71,.37,.22,.98)";
var counter = {
  value: 1,
  increment: function() {
    this.setValue(this.value + 1);
  },
  decrement: function() {
    this.setValue(this.value - 1);
  },
  setValue: function(newVal) {
    if (this.value <= 0 || this.value >= carouselItems.length - 1 || !!progress)
      return;
    if (
      this.value === newVal ||
      newVal < 0 ||
      newVal > carouselItems.length - 1
    )
      return;

    carouselDots[this.value - 1].classList.remove("slide-active");
    this.value = newVal;

    if (this.value === 0)
      carouselDots[Item_length - 1].classList.add("slide-active");
    else if (this.value === carouselItems.length - 1)
      carouselDots[0].classList.add("slide-active");
    else carouselDots[this.value - 1].classList.add("slide-active");

    progress = true;
    carouselSlide.style.transition = `transform 1s ${easeInOutExpo}`;
    carouselSlide.style.transform = `translateX(${-size * this.value}px)`;
    resetTimer();
  }
};

var carousel_interval = setInterval(() => {
  counter.increment();
}, 4000);

var resetTimer = function() {
  clearInterval(carousel_interval);
  carousel_interval = setInterval(() => {
    counter.increment();
  }, 4000);
};

carouselSlide.style.transform = `translateX(${-size * counter.value}px)`;

window.addEventListener("resize", function(e) {
  size = carouselItems[0].clientWidth;
  carouselSlide.style.transform = `translateX(${-size * counter.value}px)`;
});

prevBtn.addEventListener("click", function(e) {
  counter.decrement();
});

nextBtn.addEventListener("click", function(e) {
  counter.increment();
});

carouselSlide.addEventListener("transitionend", function(e) {
  carouselSlide.style.transition = "";
  progress = false;

  if (
    carouselItems[counter.value].classList.contains("carousel__item--cloned")
  ) {
    if (counter.value === 0) counter.value = carouselItems.length - 2;
    else counter.value = 1;

    carouselSlide.style.transform = `translateX(${-size * counter.value}px)`;
  }
});

carouselDots.forEach((dot, index) => {
  let dot_button = dot.querySelector("button");

  dot_button.addEventListener("click", function(e) {
    counter.setValue(index + 1);
  });
});