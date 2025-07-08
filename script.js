
function openPopup(modelName) {
  document.getElementById('productField').value = 'Модель: ' + modelName;
  document.getElementById('formSection').scrollIntoView({ behavior: 'smooth' });
}
document.getElementById('orderForm').addEventListener('submit', function (e) {
  e.preventDefault();
  this.style.display = 'none';
  document.querySelector('.success').style.display = 'block';
});
document.getElementById('openForm').addEventListener('click', function () {
  document.getElementById('formSection').scrollIntoView({ behavior: 'smooth' });
});
