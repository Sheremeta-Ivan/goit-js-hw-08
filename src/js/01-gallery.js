// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryListItems = document.querySelector('.gallery');

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`
    )
    .join('');
}

// const addGalleryMarkup = createGalleryMarkup(galleryItems);

galleryListItems.insertAdjacentHTML(
  'beforeend',
  createGalleryMarkup(galleryItems)
);
galleryListItems.style.listStyle = 'none';

galleryListItems.addEventListener('click', onImageClick);
function onImageClick(event) {
  event.preventDefault();
}
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
