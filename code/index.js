const adviceId = document.querySelector("#advice-id");
const adviceText = document.querySelector("blockquote");
const btn = document.querySelector(".dice");
function randomAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      adviceId.textContent = `#${data.slip.id}`;
      adviceText.textContent = data.slip.advice;
    });
}

randomAdvice();
btn.addEventListener("click", () => {
  randomAdvice();
});
