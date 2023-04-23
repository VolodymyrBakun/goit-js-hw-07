import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const markup = createGalleryMarkup(galleryItems)

galleryEl.insertAdjacentHTML('afterbegin', markup)

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => { return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`
}).join('');
};

const lightbox = new SimpleLightbox('.gallery__link', {
    captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
  })
console.log(lightbox);



