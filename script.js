// Конфигурация цен
const PRICES = {
  base: 11299,
  sizes: {
    '450': 0,
    '500': 500,
    '600': 1000,
    '700': 1500
  },
  holes: {
    '0': 0,
    '1': 500,
    '2': 1000,
    '3': 1500
  }
};

// Обновление цены
function updatePrice() {
  const size = document.getElementById('size').value;
  const holes = document.getElementById('holes').value;
  
  const totalPrice = PRICES.base + PRICES.sizes[size] + PRICES.holes[holes];
  
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
  
  // Скрываем форму и показываем сообщение об успехе
  this.style.display = 'none';
  document.getElementById('successMessage').style.display = 'block';
  
  // Здесь можно добавить отправку данных на сервер
  
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
  // Обновляем цену при изменении параметров
  document.getElementById('size').addEventListener('change', updatePrice);
  document.getElementById('holes').addEventListener('change', updatePrice);
  
  // Инициализируем начальную цену
  updatePrice();
});
