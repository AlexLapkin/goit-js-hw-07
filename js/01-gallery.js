import { galleryItems } from './gallery-items.js';
// Change code below this line

const listElem = document.querySelector('.gallery');

const renderList = (arr, container) => {
    const markup = arr.map((item) => `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"                             
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`
    )
    .join("");
    container.insertAdjacentHTML("beforeend", markup);
}

const onListClick = (event) => {
  event.preventDefault();
  if (event.currentTarget === event.target) {
    return;
  }
  const currentItem = event.target.closest(".gallery__item");
  const currentItemDataAtr = event.target.dataset.source;
  const galleryItem = galleryItems.find((item) => (item.original === currentItemDataAtr));

  // import * as basicLightbox from 'basiclightbox'

  const instance = basicLightbox.create(`
    <div class="modal">
      <img
      src="${galleryItem.original}" 
      width="800"
    </div>
`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", closeModalEsc)
      },
      
      onClose: (instance) => {
        document.removeEventListener("keydown", closeModalEsc)
      },
    },
  )
  instance.show();

  function closeModalEsc (event) {
  if (event.key === "Escape") {
    instance.close()
    }
  };
};

renderList(galleryItems, listElem);    
listElem.addEventListener("click", onListClick);