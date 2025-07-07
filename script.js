
document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.querySelector('.after-submit').style.display = 'block';
  this.reset();
});
