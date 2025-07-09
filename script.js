// Конфигурация цен
const PRICE_CONFIG = {
  base: 11299,
  sizes: {
    '450': 0,
    '500': 500,
    '600': 1000,
    '700': 1500
  },
  colors: {
    'satin': 0,
    'graphite': 2000
  },
  holes: {
    '0': 0,
    '1': 500,
    '2': 1000,
    '3': 1500
  }
};

// Смена изображения в галерее
function changeImage(img) {
  document.getElementById('currentImage').src = img.src;
}

// Обновление цены
function updatePrice() {
  const size = document.getElementById('size').value;
  const color = document.getElementById('color').value;
  const holes = document.getElementById('holes').value;
  
  const totalPrice = PRICE_CONFIG.base + 
                   PRICE_CONFIG.sizes[size] + 
                   PRICE_CONFIG.colors[color] + 
                   PRICE_CONFIG.holes[holes];
  
  document.getElementById('price').textContent = 
    new Intl.NumberFormat('ru-RU').format(totalPrice) + ' ₽';
}

// Управление попапом
function openPopup() {
  document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// Обработка формы
document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Скрываем форму и показываем сообщение
  this.style.display = 'none';
  document.getElementById('successMessage').style.display = 'block';
  
  // Очищаем форму через 5 секунд
  setTimeout(() => {
    this.reset();
    this.style.display = 'block';
    document.getElementById('successMessage').style.display = 'none';
    closePopup();
  }, 5000);
});

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
  updatePrice();
});
