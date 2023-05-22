import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

const galleryCode = galleryItems
  .map(
    (item) => `<li class="gallery__item">
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

galleryRef.insertAdjacentHTML("afterbegin", galleryCode);

galleryRef.addEventListener("click", handleGalleryItemClick);

function handleGalleryItemClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance =
    basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  galleryRef.addEventListener("keydown", handleEscape);

  function handleEscape(event) {
    if (event.code === "Escape" /* && instance.visible() */) {
      instance.close(() =>
        galleryRef.removeEventListener("keydown", handleEscape)
      );
    }
  }
}
