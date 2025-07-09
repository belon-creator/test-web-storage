import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"; // Зверніть увагу на шлях!

// Додайте імпорти вище цього рядка
import { galleryItems } from './gallery-items';
// Змініть код нижче цього рядка

console.log(galleryItems);

// 1. Отримуємо елемент галереї
const galleryEl = document.querySelector('.gallery');

// 2. Функція для створення розмітки галереї
function createGalleryMarkup(items) {
  return items.map(img => `
    <li class="gallery__item">
      <a class="gallery__link" href="${img.original}">
        <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
      </a>
    </li>
  `).join('');
}

// 3. Вставляємо розмітку в DOM
galleryEl.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

// 4. Ініціалізуємо SimpleLightbox на створеній розмітці
let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', // Використовуємо атрибут 'alt' для підпису
    captionDelay: 250,   // Затримка перед показом підпису
});

// Зауваження: подія 'show.simplelightbox' використовується для виконання дій,
// коли галерея відкривається, а не для генерації її вмісту.
// gallery.on('show.simplelightbox', function () {
//    // Якщо вам потрібно щось зробити, коли галерея відкривається, додайте код тут
// });