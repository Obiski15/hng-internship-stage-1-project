// current time
document.addEventListener("DOMContentLoaded", () => {
  function updateTimeAndDay() {
    const date = new Date();

    const utcTime = date.toUTCString().split(" ")[4];
    const day = date.toLocaleDateString("en-US", { weekday: "long" });

    document.getElementById("time").textContent = `${utcTime.split(":")[0]}:${
      utcTime.split(":")[1]
    }`;
    document.getElementById("day").textContent = day;
  }

  setInterval(updateTimeAndDay, 1000);
  updateTimeAndDay();
});

// Slider
const slider = function () {
  const goalNum = document.querySelectorAll(".goal_num");
  const slides = document.querySelectorAll(".goal_item");
  const btnLeft = document.querySelector(".left_goal_arrow");
  const btnRight = document.querySelector(".right_goal_arrow");

  let curSlide = 0;
  const maxSlide = slides.length;

  // insert num for goals
  function setGoalNumber() {
    goalNum.forEach((data, i) => {
      data.textContent = i + 1;
    });
  }
  setGoalNumber();

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
  };

  //previous slide
  const prevSlide = function () {
    if (curSlide === 0) return;
    else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  goToSlide(0);

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
};
slider();
