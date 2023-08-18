import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const listEl = document.querySelector('.gallery');

const renderList = (arr, container) => {
    const markup = arr.map((item) => `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"                             
      alt="${item.description}"
    />
  </a>
</li>`
    )
    .join("");
    container.insertAdjacentHTML("beforeend", markup);
}

renderList(galleryItems, listEl);

 // SimpleLightbox
let galleryLightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});