// Конфигурация цен
const PRICE_CONFIG = {
  base: 11299,
  sizePrices: {
    '450': 0,
    '500': 500,
    '600': 1000,
    '700': 1500
  },
  holesPrices: {
    '0': 0,
    '1': 500,
    '2': 1000,
    '3': 1500
  }
};

// Обновление цены
function updatePrice() {
  const size = document.getElementById('sizeSelect').value;
  const holes = document.getElementById('holesSelect').value;
  
  const totalPrice = PRICE_CONFIG.base + 
                    PRICE_CONFIG.sizePrices[size] + 
                    PRICE_CONFIG.holesPrices[holes];
  
  document.getElementById('productPrice').textContent = 
    formatPrice(totalPrice);
}

// Форматирование цены
function formatPrice(price) {
  return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
}

// Смена изображения при выборе цвета
function changeProductImage(color) {
  const mainImage = document.getElementById('mainProductImage');
  mainImage.src = `images/${color}.jpg`;
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
  updatePrice();
  
  // Обработчик кнопки заказа
  document.querySelector('.order-btn').addEventListener('click', function() {
    alert('Заказ оформлен! Мы свяжемся с вами в ближайшее время.');
  });
});
