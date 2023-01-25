const btn = document.querySelector(".switch-mode");
const cuerpo = document.querySelector("body");
btn.onclick = function () {
  cuerpo.classList.toggle("dark");
};
const list = document.querySelectorAll("a");

function Maquinahobbit() {
  list.forEach((hobbit) => hobbit.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((hobbit) => hobbit.addEventListener("click", Maquinahobbit));
