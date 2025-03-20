
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Swiper for main slider
  let swiper = new Swiper(".mySwiper", {
    loop: true,  
    autoplay: {
      delay: 3000,              
      disableOnInteraction: false
    },
    on: {
      slideChangeTransitionEnd: function () {
        updateRightSlider(swiper.realIndex);
      }
    }
  });

  function updateRightSlider(index) {
      let slides = document.querySelectorAll(".right-slider .slide");

      slides.forEach(slide => {
          slide.classList.remove("active");
      });

      slides[index].classList.add("active");
  }

  // Left-side Dots Navigation
  document.querySelectorAll(".dot").forEach((dot, i) => {
      dot.addEventListener("click", () => {
          swiper.slideToLoop(i);
          document.querySelector(".dot.active").classList.remove("active");
          dot.classList.add("active");
      });
  });

  // Initial Right Slider Animation
  updateRightSlider(0);
});

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".navbar a");

    links.forEach(link => {
        link.addEventListener("click", function () {
            document.querySelector(".navbar a.active")?.classList.remove("active");
            this.classList.add("active");
        });
    });
});
