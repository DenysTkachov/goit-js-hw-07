import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

function createGalleryMarkup(item) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>
  `;
}

const galleryMarkup = galleryItems.map(createGalleryMarkup).join("");
galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

galleryEl.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  const target = event.target;
  const galleryImage = target.closest(".gallery__image");

  if (galleryImage) {
    const largeImageUrl = galleryImage.dataset.source;
    openModal(largeImageUrl);
  }
}

function openModal(largeImageUrl) {
  const modal = basicLightbox.create(
    `<img src="${largeImageUrl}" alt="Image">`
  );
  modal.show();
}