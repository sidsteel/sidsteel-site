const images = [
  'IMG_9544.jpeg', 'IMG_9545.jpeg', 'IMG_9546.jpeg',
  'IMG_9547.jpeg', 'IMG_9548.jpeg', 'IMG_9549.jpeg', 'IMG_9550.jpeg'
];
let currentIndex = 0;
function updateImage() {
  document.getElementById("mainImage").src = "images/" + images[currentIndex];
}
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}
function updatePrice() {
  const price = document.getElementById("size").value;
  document.getElementById("price").innerText = "Цена: " + parseInt(price).toLocaleString("ru-RU") + " ₽";
}
function openModal() {
  document.getElementById("modal").style.display = "flex";
}