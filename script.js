let timeoutId;
function debounce(cb, dely = 5_00) {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    cb();
  }, dely);
}

const cartItems = [];
const productsResponse = [
  {
    id: 1,
    title: "Gold Hoop Earrings",
    shortDesc: "Elegant gold hoop earrings perfect for any occasion.",
    price: 49.99,
    size: "Medium",
    color: "Gold",
    image:
      "./assets/HE-IN-Stainless-steel-Imitation-Pearl-Irregular-Trend-Multi-Strand-Necklace.jpg",
  },
  {
    id: 2,
    title: "Silver Pendant Necklace",
    shortDesc: "Charming silver pendant necklace with a unique design.",
    price: 39.99,
    size: "One Size",
    color: "Silver",
    image:
      "./assets/HE-IN-Stainless-steel-Imitation-Pearl-Key-Trend-Beaded-Necklace-0.jpg",
  },
  {
    id: 3,
    title: "Gold Bracelet",
    shortDesc: "Stylish gold bracelet that adds a touch of elegance.",
    price: 59.99,
    size: "Adjustable",
    color: "Gold",
    image:
      "./assets/HE-IN-Stainless-steel-Irregular-Trend-Multi-Strand-Necklace-0.jpg",
  },
  {
    id: 4,
    title: "Silver Stud Earrings",
    shortDesc: "Classic silver stud earrings for everyday wear.",
    price: 29.99,
    size: "Small",
    color: "Silver",
    image:
      "./assets/HE-IN-Stainless-steel-Rhinestone-Evil-Eye-Dainty-Initials-Necklace-0.jpg",
  },
  {
    id: 5,
    title: "Gold Infinity Ring",
    shortDesc: "Beautiful gold infinity ring symbolizing endless love.",
    price: 69.99,
    size: "7",
    color: "Gold",
    image: "./assets/HE-IN-Stainless-steel-Round-Trend-Link-Necklace-0.jpg",
  },
  {
    id: 6,
    title: "Silver Charm Bracelet",
    shortDesc: "Customize your look with this silver charm bracelet.",
    price: 45.99,
    size: "Adjustable",
    color: "Silver",
    image:
      "./assets/HE-IN-Stainless-steel-Shell-Round-Dainty-Link-Necklace-0.jpg",
  },
  {
    id: 7,
    title: "Gold Statement Necklace",
    shortDesc: "Bold gold statement necklace to elevate any outfit.",
    price: 79.99,
    size: "One Size",
    color: "Gold",
    image: "./assets/HE-IN-Stainless-steel-Trend-Link-Necklace-0.jpg",
  },
  {
    id: 8,
    title: "Silver Ankle Bracelet",
    shortDesc: "Delicate silver ankle bracelet perfect for summer.",
    price: 34.99,
    size: "One Size",
    color: "Silver",
    image:
      "./assets/HE-IN-Titanium-Steel-Bowknot-Trend-Initials-Necklace-0.jpg",
  },
  {
    id: 9,
    title: "Gold Cufflinks",
    shortDesc: "Elegant gold cufflinks for a sophisticated look.",
    price: 50.0,
    size: "One Size",
    color: "Gold",
    image:
      "./assets/Ibecca-925-Sterling-Silver-Cubic-Zirconia-Irregular-Dainty-Locket-Necklace-0.jpg",
  },
  {
    id: 10,
    title: "Silver Hoop Earrings",
    shortDesc: "Classic silver hoop earrings for versatile styling.",
    price: 35.99,
    size: "Medium",
    color: "Silver",
    image:
      "./assets/HE-IN-Stainless-steel-Imitation-Pearl-Irregular-Trend-Multi-Strand-Necklace.jpg",
  },
  {
    id: 11,
    title: "Gold Bar Necklace",
    shortDesc: "Minimalist gold bar necklace for a chic look.",
    price: 44.99,
    size: "One Size",
    color: "Gold",
    image:
      "./assets/HE-IN-Stainless-steel-Imitation-Pearl-Key-Trend-Beaded-Necklace-0.jpg",
  },
  {
    id: 12,
    title: "Silver Beaded Bracelet",
    shortDesc: "Stylish silver beaded bracelet for a casual vibe.",
    price: 27.99,
    size: "Adjustable",
    color: "Silver",
    image:
      "./assets/HE-IN-Stainless-steel-Irregular-Trend-Multi-Strand-Necklace-0.jpg",
  },
  {
    id: 13,
    title: "Gold Choker Necklace",
    shortDesc: "Trendy gold choker necklace for a modern look.",
    price: 39.99,
    size: "One Size",
    color: "Gold",
    image: "./assets/HE-IN-Stainless-steel-Trend-Link-Necklace-0.jpg",
  },
  {
    id: 14,
    title: "Silver Cross Pendant",
    shortDesc: "Meaningful silver cross pendant necklace.",
    price: 49.99,
    size: "One Size",
    color: "Silver",
    image:
      "./assets/HE-IN-Stainless-steel-Shell-Round-Dainty-Link-Necklace-0.jpg",
  },
  {
    id: 15,
    title: "Gold Stackable Rings",
    shortDesc: "Set of gold stackable rings for versatile styling.",
    price: 55.99,
    size: "7",
    color: "Gold",
    image:
      "./assets/HE-IN-Stainless-steel-Rhinestone-Evil-Eye-Dainty-Initials-Necklace-0.jpg",
  },
  {
    id: 16,
    title: "Silver Ear Cuffs",
    shortDesc: "Unique silver ear cuffs for a bold statement.",
    price: 29.99,
    size: "One Size",
    color: "Silver",
    image:
      "./assets/HE-IN-Stainless-steel-Rhinestone-Evil-Eye-Dainty-Initials-Necklace-0.jpg",
  },
  {
    id: 17,
    title: "Gold Locket Necklace",
    shortDesc: "Beautiful gold locket necklace for keepsakes.",
    price: 64.99,
    size: "One Size",
    color: "Gold",
    image:
      "./assets/HE-IN-Titanium-Steel-Bowknot-Trend-Initials-Necklace-0.jpg",
  },
  {
    id: 18,
    title: "Silver Chain Bracelet",
    shortDesc: "Classic silver chain bracelet for everyday wear.",
    price: 39.99,
    size: "Adjustable",
    color: "Silver",
    image:
      "./assets/HE-IN-Stainless-steel-Irregular-Trend-Multi-Strand-Necklace-0.jpg",
  },
  {
    id: 19,
    title: "Gold Bangle",
    shortDesc: "Elegant gold bangle for a refined look.",
    price: 49.99,
    size: "One Size",
    color: "Gold",
    image:
      "./assets/HE-IN-Stainless-steel-Imitation-Pearl-Irregular-Trend-Multi-Strand-Necklace.jpg",
  },
  {
    id: 20,
    title: "Silver Crystal Ring",
    shortDesc: "Stunning silver ring adorned with crystals.",
    price: 54.99,
    size: "6",
    color: "Silver",
    image:
      "./assets/HE-IN-Stainless-steel-Imitation-Pearl-Key-Trend-Beaded-Necklace-0.jpg",
  },
];

const list = document.querySelector("#main-list");
const input = document.querySelector("#search-input");
const button = document.querySelector("#button-click");
const header = document.querySelector("#top-nav");
const backToTopButton = document.querySelector("#back-to-top");
const cartButtonBadge = document.querySelector(".cart-button__badge");
const popup = document.querySelector("#product_details_dialog");
const popupContent = document.querySelector(".product_details_content");
const popupTitle = document.querySelector("#product_details_title");
const popupDesc = document.querySelector("#product_details_desc");
const popupPrice = document.querySelector("#product_details_price");

// --- Cart State ---
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Elements
const cartSidebar = document.getElementById("cart-sidebar");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");
const openCartBtn = document.getElementById("open-cart");
const closeCartBtn = document.getElementById("close-cart");
const clearCartBtn = document.getElementById("clear-cart");

openCartBtn.addEventListener("click", () => {
  cartSidebar.classList.add("active");
  backToTopButton.classList.remove("active"); // hide while cart is open
});

closeCartBtn.addEventListener("click", () => {
  cartSidebar.classList.remove("active");
  // re-check scroll position to decide if it should show
  const heroSection = document.querySelector(".hero-container");
  if (window.scrollY > heroSection.offsetHeight) {
    backToTopButton.classList.add("active");
  }
});

clearCartBtn.addEventListener("click", () => {
  cart = [];
  saveCart();
  renderCart();
});

// Save to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Add to cart
function addToCart(product) {
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveCart();
  renderCart();
}

// Remove, increase, decrease
function increaseQty(id) {
  cart = cart.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  );
  saveCart();
  renderCart();
}

function decreaseQty(id) {
  cart = cart.map((item) =>
    item.id === id && item.quantity > 1
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
  saveCart();
  renderCart();
}

function deleteItem(id) {
  cart = cart.filter((item) => item.id !== id);
  saveCart();
  renderCart();
}

// Render cart sidebar
function renderCart() {
  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.quantity;

    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="cart-item-details">
        <div class="cart-item-title">${item.title}</div>
        <div>Size: ${item.size} | Color: ${item.color}</div>
        <div>$${item.price.toFixed(2)}</div>
      </div>
      <div class="cart-actions">
        <button onclick="decreaseQty(${
          item.id
        })" " style="size=30px; font-size:17px"> - </button>
        <span style="font-size:15px; font-weight:bold" >${item.quantity}</span>
        <button onclick="increaseQty(${
          item.id
        })" " style="size=30px; font-size:17px"> + </button>
        <button onclick="deleteItem(${
          item.id
        })" style="size=30px; font-size:15px"> 🗑 </button>
      </div>
    `;
    cartItemsContainer.appendChild(div);
  });

  cartTotal.textContent = `$${total.toFixed(2)}`;
  cartCount.textContent = cart.length;
  cartButtonBadge.textContent = cart.length;
}

document.querySelector("#close-popup").addEventListener("click", () => {
  popup.classList.remove("active");
});

document.addEventListener("scroll", () => {
  debounce(() => {
    const heroSection = document.querySelector(".hero-container");
    const footer = document.querySelector(".footer");
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const heroBottom = heroSection.offsetHeight;

    // Footer position
    const footerTop = footer.offsetTop;

    // Hide conditions:
    // 1. Still in hero
    // 2. Cart sidebar is open
    // 3. Footer is visible
    if (
      scrollY <= heroBottom ||
      cartSidebar.classList.contains("active") ||
      scrollY + windowHeight >= footerTop
    ) {
      backToTopButton.classList.remove("active");
    } else {
      backToTopButton.classList.add("active");
    }
  });
});

// document.addEventListener("scroll", () => {
//   debounce(() => {
//     const heroSection = document.querySelector(".hero-container");
//     const heroBottom = heroSection.offsetHeight; // bottom of hero
//     const scrollY = window.scrollY;

//     // Only show if past hero AND sidebar is not open
//     if (scrollY > heroBottom && !cartSidebar.classList.contains("active")) {
//       backToTopButton.classList.add("active");
//     } else {
//       backToTopButton.classList.remove("active");
//     }
//   });
// });

input.addEventListener("input", searchProducts);

function getInputValue() {
  return input.value;
}

function searchProducts(e) {
  debounce(() => {
    const inputValue = getInputValue().toLowerCase();
    const matchedProducts = productsResponse.filter((product) =>
      product.title.toLowerCase().includes(inputValue)
    );

    renderProducts(matchedProducts, "#main-list");
    renderProducts(matchedProducts, "#popular-list");
    renderProducts(matchedProducts, "#recommended-list");
  });
}

// function searchProducts(e) {
//   debounce(() => {
//     const inputValue = getInputValue().toLowerCase();
//     const matchedProducts = productsResponse.filter((product) =>
//       product.title.toLowerCase().includes(inputValue)
//     );
//     renderProducts(matchedProducts);
//   });
// }

function createProductElement(product) {
  try {
    const productElementContainer = document.createElement("div");

    const productElementTitle = document.createElement("h3");
    const productElementDescription = document.createElement("p");
    const productElementPrice = document.createElement("span");
    const productElementImage = document.createElement("img");
    const productElementAddToCartButton = document.createElement("button");

    productElementContainer.classList.add("product-card");

    productElementTitle.textContent = product.title;
    productElementDescription.textContent = product.shortDesc;
    productElementPrice.textContent = `$${product.price.toFixed(2)}`;
    productElementPrice.classList.add("product-price");

    productElementImage.src = product.image;
    productElementImage.alt = product.title;
    productElementImage.classList.add("product-image");

    productElementAddToCartButton.textContent = "Add to Cart";
    productElementAddToCartButton.classList.add("add-to-cart-button");

    // 👉 Stop propagation so clicking the button does NOT trigger the popup
    productElementAddToCartButton.addEventListener("click", (e) => {
      e.stopPropagation();
      addToCart(product);
    });

    // 👉 Clicking the card (but not the button) opens the details popup
    productElementContainer.addEventListener("click", () => {
      popup.classList.add("active");
      const productImage = document.querySelector("#product_details_image");
      productImage.src = product.image;
      productImage.alt = product.title;

      popupTitle.textContent = product.title;
      popupDesc.textContent = `Description: ${product.shortDesc}`;
      popupPrice.textContent = `Price: $${product.price.toFixed(2)}`;
      popup.querySelector(
        "#product_details_size"
      ).textContent = `Size: ${product.size}`;
      popup.querySelector(
        "#product_details_color"
      ).textContent = `Color: ${product.color}`;
    });

    productElementContainer.appendChild(productElementImage);
    productElementContainer.appendChild(productElementTitle);
    productElementContainer.appendChild(productElementDescription);
    productElementContainer.appendChild(productElementPrice);
    productElementContainer.appendChild(productElementAddToCartButton);

    return productElementContainer;
  } catch (error) {
    return null;
  }
}

// function createProductElement(product) {
//   try {
//     const productElementContainer = document.createElement("div");

//     const productElementTitle = document.createElement("h3");
//     const productElementDescription = document.createElement("p");
//     const productElementPrice = document.createElement("span");
//     // const productElementId = document.createElement("span");
//     const productElementImage = document.createElement("img");
//     const productElementAddToCartButton = document.createElement("button");

//     productElementContainer.classList.add("product-card");

//     productElementTitle.textContent = product.title;
//     productElementDescription.textContent = product.shortDesc;
//     productElementPrice.textContent = `$${product.price.toFixed(2)}`; // Format price
//     productElementPrice.classList.add("product-price");
//     productElementImage.src = product.image; // Set image source
//     productElementImage.alt = product.title; // Set alt text for accessibility
//     productElementImage.classList.add("product-image");
//     //    productElementId.textContent = `ID: ${product.id}`;
//     // productElementId.classList.add("product-id");
//     productElementAddToCartButton.textContent = "Add to Cart";
//     productElementAddToCartButton.classList.add("add-to-cart-button");
//     // productElementAddToCartButton.onclick = () => {
//     //   if (cartItems.includes(product.id)) {
//     //     return alert("This product is already in the cart.");
//     //   }

//     //   cartItems.push(product.id);
//     //   productElementAddToCartButton.onclick = () => addToCart(product);
//     //   cartButtonBadge.textContent = cartItems.length;
//     //   alert(`Product ${product.title} added to cart.`);
//     // };
//     productElementAddToCartButton.onclick = () => addToCart(product);

//     productElementContainer.addEventListener("click", (e) => {
//       popup.addEventListener("click", (e) => {
//         if (e.target === popup && e.target !== popupContent) {
//           popup.classList.remove("active");
//         }
//       });
//       popup.classList.add("active");
//       // Populate the popup with product details
//       const productImage = document.querySelector("#product_details_image");
//       productImage.src = product.image;
//       productImage.alt = product.title;

//       popupTitle.textContent = product.title;
//       popupDesc.textContent = `Description: ${product.shortDesc}`;
//       popupPrice.textContent = `Price: $${product.price.toFixed(2)}`; // Format price
//       popup.querySelector(
//         "#product_details_size"
//       ).textContent = `Size: ${product.size}`;
//       popup.querySelector(
//         "#product_details_color"
//       ).textContent = `Color: ${product.color}`;
//     });
//     productElementContainer.appendChild(productElementImage);

//     productElementContainer.appendChild(productElementTitle);
//     productElementContainer.appendChild(productElementDescription);
//     productElementContainer.appendChild(productElementPrice);
//     //productElementContainer.appendChild(productElementId);
//     productElementContainer.appendChild(productElementAddToCartButton);

//     return productElementContainer;
//   } catch (error) {
//     return null;
//   }
// }
function renderProducts(products, containerId) {
  const container = document.querySelector(containerId);
  container.innerHTML = "";

  if (products.length === 0) {
    container.innerHTML = '<p class="empty-list">No products found.</p>';
    return;
  }

  products.forEach((p) => {
    const productElement = createProductElement(p);
    container.appendChild(productElement);
  });
}

// function renderProducts(products) {
//   list.innerHTML = "";

//   if (products.length === 0) {
//     list.innerHTML = '<p class="empty-list">No products found.</p>';
//     return;
//   }

//   products.forEach((p) => {
//     const productElement = createProductElement(p);
//     list.appendChild(productElement);
//   });
// }

renderCart();
// Call renderProducts on page load
// renderProducts(productsResponse);
// On page load, render into all sections
renderProducts(productsResponse, "#main-list");
renderProducts(productsResponse, "#popular-list");
renderProducts(productsResponse, "#recommended-list");
