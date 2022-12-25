import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

galleryRef.addEventListener("click", onImgClick);

const markupGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`;
  })
  .join("");

galleryRef.insertAdjacentHTML("beforeend", markupGallery);

function onImgClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  let originalImg = e.target.dataset.source;
  console.log(originalImg);

  const instance = basicLightbox.create(`
    <img src=${originalImg} width="800" height="600">
`);

  instance.show();

  document.addEventListener("keydown", onEscPushClose);

  function onEscPushClose(e) {
    if (e.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", onEscPushClose);
    }
  }
}

// const galleryRef = document.querySelector(".gallery");

// const markupGalleryEl = galleryItems
//   .map(({ preview, original, description }) => {
//     return `<div class="gallery__item">
//   <a class="gallery__link" href=${original}>
//     <img
//       class="gallery__image"
//       src=${preview}
//       data-source=${original}
//       alt=${description}
//     />
//   </a>
// </div>`;
//   })
//   .join("");

// galleryRef.insertAdjacentHTML("beforeend", markupGalleryEl);

// galleryRef.addEventListener("click", onImgClick);

// let originalImg;
// const instance = basicLightbox.create(
//   `<img src=${originalImg} width="800" height="600"> `
// );

// function onImgClick(e) {
//   e.preventDefault();
//   if (e.target.nodeName !== "IMG") {
//     return;
//   }

//   originalImg = e.target.dataset.source;
//   console.log(originalImg);

//   instance.show();
// }

// document.addEventListener("keydown", onEscPushClose);

// function onEscPushClose(e) {
//   if (e.code === "Escape") {
//     instance.close();
//   }
// }
