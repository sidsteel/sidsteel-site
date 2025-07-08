
function openPopup(modelName) {
  document.getElementById("popupForm").style.display = "block";
  document.getElementById("productInput").value = "Модель: " + modelName;
}
function closePopup() {
  document.getElementById("popupForm").style.display = "none";
}
document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();
  this.style.display = "none";
  document.querySelector(".success").style.display = "block";
});
