import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
const markup = createGalleryMarkup(galleryItems);

galleryEl.insertAdjacentHTML('afterbegin', markup)

galleryEl.addEventListener('click', onImgClick)


function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => { return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
}).join('');
};

function onImgClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return
    }

    const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`).show()
    
    // document.body.addEventListener('keydown', (e) => {
    //     if (e.key === "Escape") instance.close()
    //   })
}



