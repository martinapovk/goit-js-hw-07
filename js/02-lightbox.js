import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const galleryCode = galleryItems
  .map(
    (item) => `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a>
</li>`
  )
  .join("");

galleryRef.insertAdjacentHTML("afterbegin", galleryCode);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
