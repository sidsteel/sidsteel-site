document.getElementById('orderForm').addEventListener('submit', function (e) {
  e.preventDefault();
  this.style.display = 'none';
  document.querySelector('.success').style.display = 'block';
});

document.getElementById('openForm').addEventListener('click', function () {
  document.getElementById('formSection').scrollIntoView({ behavior: 'smooth' });
});