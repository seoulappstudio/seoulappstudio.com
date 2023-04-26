const colors = ['rgb(255, 105, 180)', 'rgb(30, 144, 255)', 'rgb(255, 215, 0)'];
const sizes = ['10px', '20px', '30px', '40px', '50px'];

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
    bubble.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    bubble.style.width = sizes[Math.floor(Math.random() * sizes.length)];
    bubble.style.height = bubble.style.width;
    bubble.style.left = Math.floor(Math.random() * 90) + '%';
    bubble.classList.add("bubble");
    bubbleContainer.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 6000);
}, 500);