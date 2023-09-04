import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
function createGalleryMarkup(item) {
    return `
    <li class="gallery__item">
     <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
     </a>
    </li>
    `;
}



const galleryMarkup = galleryItems.map(createGalleryMarkup).join("");


galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
//   captionDelay: 100,
});

