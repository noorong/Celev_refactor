export async function insertOrderElement(cart) {
  console.log("장바구니");
  let cost = 0;
  cart.forEach((product) => {
    const orderForm = document.querySelector(".total");
    const name = product.name;
    const price = product.totalPrice;
    const img = product.img;
    const size = product.selectSize;
    const color = product.selectColor;
    const count = product.totalCount;
    orderForm.insertAdjacentHTML(
      "beforeend",
      `
      <div class="product">
        <img class="box" src="${img}"></img>
        <div class="info">
          <ul class="productInfo">
              <li id="name">
                  ${name}
              </li>
              <li id="color">
                  color: 
                  <div>
                      ${color}
                  </div>
              </li>
              <li id="size">
                  size:
                  <div>
                      ${size}
                  </div>
              </li>
              <li id="count">
                  count:
                  <div>
                      ${count}
                  </div>
              </li>
              <li id="price">
                  price:
                  <div>
                      ${price}
                  </div>
              </li>
          </ul>
        </div>
      `
    );
    cost += parseInt(price.replace(/(,|개|원)/g, ""));
  });
  const totalPrice = document.querySelector(".AllPrice");
  totalPrice.innerHTML = cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.querySelector(".totalCount").innerHTML = cart.length;
}
