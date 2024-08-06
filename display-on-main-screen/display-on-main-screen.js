//this function contain the html tags to display each card on the screen

function displayOnMainScreen() {
  let cardContainer = document.querySelector(".card_container");

  // let innerHTML = "";
  itemList.forEach((item) => {
    const createDiv = document.createElement("div");
    createDiv.className = "card_div";
    console.log(item);
    cardContainer.appendChild(createDiv);
    createDiv.innerHTML = ` 
  <div class="card_div">
            <div class="card_img_div">
              <img
                class="card_img"
                src="${item.card_img}"
                alt=""
              />
              <div class="card_rating">${item.card_rating.card_rating} <svg class="card_rating_svg" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="green"><path d="m263-161.54 57.31-246.77-191.46-165.92 252.61-21.92L480-828.84l98.54 232.69 252.61 21.92-191.46 165.92L697-161.54 480-292.46 263-161.54Z"/></svg> | ${item.card_rating.card_rating_count}</div>
            </div>
            <span class="card_view_similar"><svg class="card_view_similar_svg" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-260v-440q0-25 17.5-42.5T180-760q25 0 42.5 17.5T240-700v440q0 25-17.5 42.5T180-200q-25 0-42.5-17.5T120-260Zm220 60q-25 0-42.5-17.5T280-260v-440q0-25 17.5-42.5T340-760h280q25 0 42.5 17.5T680-700v440q0 25-17.5 42.5T620-200H340Zm380-60v-440q0-25 17.5-42.5T780-760q25 0 42.5 17.5T840-700v440q0 25-17.5 42.5T780-200q-25 0-42.5-17.5T720-260Zm-360-20h240v-400H360v400Zm120-200Z"/></svg></span>
            <div class="card_hover">
              <button class="card_button" type="submit"> <svg class="card_button_svg" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg> Add To Cart</button>
              <span>Size : M</span>
            </div>
  
            <div class="card_details">
              <h4 class="card_company">${item.card_company}</h4>
              <p class="card_name">${item.card_name}</p>
              <div class="card_price_details">
                <pc class="card_price">Rs. ${item.card_price_details.card_price}</pc>
                <p class="card_price_strikethrough">Rs. ${item.card_price_details.card_price_strikethrough}</p>
                <p class="card_price_off">(${item.card_price_details.card_price_off}% off)</p>
              </div>
            </div>
          </span> `;
  });

  // let item = {
  //   card_img: "/assets/assets (1)/asset 9.jpeg",
  //   card_rating: {
  //     card_rating: 4.5,
  //     card_rating_count: 1400,
  //   },
  //   card_company: "XYXX",
  //   card_name: "Polo collar Cotton T-shirt",
  //   card_price_details: {
  //     card_price: 699,
  //     card_price_strikethrough: 1499,
  //     card_price_off: 45,
  //   },
  // };
}
