const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
// Preload the GIF
const preloadedGif = new Image();
preloadedGif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGVhbGxjZnQ1MmZoeWFnejZmemg0ZzVzajl0YjJrbmE5dDA4N2xjdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qFmdpUKAFZ6rMobzzu/giphy.gif";

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I LOVE YOU TOO";
  gif.src = preloadedGif.src; // Use the preloaded GIF
});


// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  // Generate random positions
  let randomX, randomY;

  // Ensure the new position is different enough from the current one
  do {
    randomX = Math.floor(Math.random() * maxX);
    randomY = Math.floor(Math.random() * maxY);
  } while (
    Math.abs(randomX - noBtn.offsetLeft) < 30 && // Prevent minor movement
    Math.abs(randomY - noBtn.offsetTop) < 30
  );

  // Apply new position
  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});


