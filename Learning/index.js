let counter = 0;

const counterValue = document.getElementsByClassName("box-2")[0];
const addition = document.getElementsByClassName("box-3")[0];
const subtract = document.getElementsByClassName("box-1")[0];
const resetbtn = document.getElementById("reset");

addition.addEventListener("click", () => {
  counter++;
  counterValue.innerHTML = counter;
});

subtract.addEventListener("click", () => {
  counter--;
  counterValue.innerHTML = counter;
});

resetbtn.addEventListener("click", () => {
  counter = 0;
  counterValue.innerHTML = counter;
});

