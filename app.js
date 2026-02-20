let totalClicks = 0;
let totalYes = 0;
let totalNo = 0;

const resultEl = document.querySelector(".result");
const yesEl = document.getElementById("yesCount");
const noEl = document.getElementById("noCount");
const totalEl = document.getElementById("totalCount");
const button = document.getElementById("decideBtn");
const toggleBtn = document.getElementById("toggleBtn");
const inputWrapper = document.getElementById("inputWrapper");

toggleBtn.addEventListener("click", () => {
  inputWrapper.classList.toggle("active");
});

button.addEventListener("click", decide);

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && !button.disabled) {
    decide();
  }
});

function decide() {
  if (button.disabled) return;

  totalClicks++;
  totalEl.textContent = totalClicks;

  button.disabled = true;

  inputWrapper.classList.remove("active");

  resultEl.className = "result loading";
  resultEl.textContent = "Consulting the universe...";

  setTimeout(() => {
    const isYes = Math.random() < 0.5;

    if (isYes) {
      totalYes++;
      resultEl.textContent = "YES";
      resultEl.className = "result yes";
    } else {
      totalNo++;
      resultEl.textContent = "NO";
      resultEl.className = "result no";
    }

    yesEl.textContent = totalYes;
    noEl.textContent = totalNo;

    button.disabled = false;
  }, 600);
}
