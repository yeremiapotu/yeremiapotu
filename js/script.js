const button = document.getElementById("button");
const buttonContent = document.getElementById("buttonContent");
const cardContent = document.getElementById("cardContent");

button.addEventListener("click", function () {
  buttonContent.style.display = "none";
  cardContent.style.display = "block";
});
