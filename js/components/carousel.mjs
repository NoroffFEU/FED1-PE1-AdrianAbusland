//Code borrowed from: https://codepen.io/natalieannebirch/pen/MWbKyyg //

export const carousel = () => {
  const prev = document.querySelector(".prevBtn");
  const next = document.querySelector(".nextBtn");
  const dots = document.querySelectorAll(".dot");
  const imgs = document.querySelectorAll(".carouselBox");
  const totalImgs = imgs.length;
  let imgPosition = 0;

  // Check if carousel elements exist
  if (totalImgs === 0 || dots.length === 0) {
    console.warn("Carousel elements not found. Skipping carousel initialization.");
    return;
  }

  const updatePosition = () => {
    for (let img of imgs) {
      img.classList.remove("visible");
      img.classList.add("hidden");
    }
    for (let dot of dots) {
      dot.className = dot.className.replace(" active", "");
    }
    if (dots[imgPosition]) {
      dots[imgPosition].classList.add("active");
    }
    if (imgs[imgPosition]) {
      imgs[imgPosition].classList.remove("hidden");
      imgs[imgPosition].classList.add("visible");
    }
  };

  updatePosition();

  const nextImg = () => {
    if (imgPosition === totalImgs - 1) {
      imgPosition = 0;
    } else {
      imgPosition++;
    }
    updatePosition();
  };

  const prevImg = () => {
    if (imgPosition === 0) {
      imgPosition = totalImgs - 1;
    } else {
      imgPosition--;
    }
    updatePosition();
  };

  dots.forEach((dot, dotPosition) => {
    dot.addEventListener("click", () => {
      imgPosition = dotPosition;
      updatePosition(dotPosition);
    });
  });

  next.addEventListener("click", nextImg);
  prev.addEventListener("click", prevImg);
};
