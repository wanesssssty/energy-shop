const shopimageGallery = document.querySelector(".shop-page-container");
// shopimageGallery.style.display = "flex";
// shopimageGallery.style.justify-content = 'space-around';

const imageGallery = document.querySelector(".monster-container");
const imageGallery2 = document.querySelector(".monster-container2");

const images = [
  {
    url: "./img/violet-ultra",
    description: "MONSTER ENERGY ZERO SUGAR LEWIS HAMILTON 500ML",
    price: "149₴"
  },
  {
    url: "./img/lewis.png",
    description: "MONSTER ENERGY NITRO SUPER DRY 500ML",
    price: "99₴"
  },
  {
    url: "./img/nitro.png",
    description: "MONSTER ENERGY CLASSIC ORIGINAL 500ML",
    price: "59₴"
  },
  {
    url: "./img/monster-classic.webp",
    description: "MONSTER ENERGY CLASSIC ORIGINAL 500ML",
    price: "79₴"
  },
  {
    url: "./img/punch-pacific",
    description: "MONSTER ENERGY PACIFIC PUNCH JUICE 500ML",
    price: "99₴"
  },
  {
    url: "./img/pipeline-punch.png",
    description: "MONSTER ENERGY PIPELINE PUNCH JUICE 500ML",
    price: "89₴"
  }
];

// Function to create image cards
function createImageCard(imageObject) {
  const imageCard = document.createElement("div");
  imageCard.classList.add("monster-container-3");

  const image = document.createElement("img");
  image.src = imageObject.url;
  image.alt = "Monster Energy";

  const imageDescription = document.createElement("p");
  imageDescription.classList.add("text-monsters");
  imageDescription.textContent = imageObject.description;

  const priceButton = document.createElement("button");
  priceButton.classList.add("price-monsters");
  priceButton.textContent = `Ціна ${imageObject.price}`;

  imageCard.appendChild(image);
  imageCard.appendChild(imageDescription);
  imageCard.appendChild(priceButton);

  return imageCard;
}

// Function to load initial images
function loadInitialImages() {
  for (let i = 0; i < 2; i++) {
    imageGallery.appendChild(createImageCard(images[i]));
  }
}

function loadInitialImages() {
  for (let i = 0; i < 3; i++) {
    imageGallery2.appendChild(createImageCard(images[i]));
  }
}

// Function to load more images
function loadMore() {
  const loadButton = document.querySelector(".load-buttons button");
  loadButton.style.display = "none";

  for (let i = 3; i < images.length; i++) {
    imageGallery.appendChild(createImageCard(images[i]));
  }
}

// Load initial images
loadInitialImages();

// Todo hover to button, delete name in login and add forgot password button 
