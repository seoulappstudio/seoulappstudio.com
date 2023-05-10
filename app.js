const colors = ["rgb(255, 105, 180)", "rgb(30, 144, 255)", "rgb(255, 215, 0)"];
const sizes = ["10px", "20px", "30px", "40px", "50px"];

// const bubbles = document.querySelectorAll('.bubble');

// bubbles.forEach(bubble => {
//     bubble.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
//     bubble.style.width = sizes[Math.floor(Math.random() * sizes.length)];
//     bubble.style.height = bubble.style.width;
//     bubble.style.left = Math.floor(Math.random() * 100) + '%';
// });

const bubbleContainer = document.querySelector(".bubbles-container");
setInterval(() => {
  const bubble = document.createElement("div");
  bubble.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
  bubble.style.width = sizes[Math.floor(Math.random() * sizes.length)];
  bubble.style.height = bubble.style.width;
  bubble.style.left = Math.floor(Math.random() * 90) + "%";
  bubble.classList.add("bubble");
  bubbleContainer.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 6000);
}, 500);

const previewImages = document.querySelectorAll(".preview-image");

// window.addEventListener("scroll", () => {
//   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//   previewImages.forEach((previewImage) => {
//     const imageTop = previewImage.offsetTop;
//     const imageHeight = previewImage.offsetHeight;

//     if (scrollTop + window.innerHeight > imageTop + imageHeight / 3) {
//       previewImage.classList.add("visible");
//     } else {
//       previewImage.classList.remove("visible");
//     }
//   });
// });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
});

previewImages.forEach((previewImage) => {
  observer.observe(previewImage);
});
