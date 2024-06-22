// console.log("hey");

let cardContainer = document.querySelector(".card_container");

let item = {
  card_img: "/assets/assets (1)/asset 9.jpeg",
  card_rating: {
    card_rating: "4.5 ⭐ | 1400",
  },
  card_company: "XYXX",
  card_name: "Polo collar Cotton T-shirt",
  card_price_details: {
    card_price: 699,
    card_price_strikethrough: 1499,
    card_price_off: 45,
  },
};

cardContainer.innerHTML = ` 
<div class="card_div">
          <div class="card_img_div">
            <img
              class="card_img"
              src="${item.card_img}"
              alt=""
            />
            <span class="card_rating">${item.card_rating.card_rating}</span>
          </div>
          <button class="card_button" type="submit">Add To Cart</button>
          <div class="card_details">
            <h4 class="card_company">${item.card_company}</h4>
            <p class="card_name">${item.card_name}</p>
            <div class="card_price_details">
              <pc class="card_price">Rs. ${item.card_price_details.card_price}</pc>
              <p class="card_price_strikethrough">Rs. ${item.card_price_details.card_price_strikethrough}</p>
              <p class="card_price_off">(${item.card_price_details.card_price_off} % off) </p>
            </div>
          </div>
 </div>`;
