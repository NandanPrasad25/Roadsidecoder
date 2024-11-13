document.addEventListener("DOMContentLoaded", function () {
  const app = document.querySelector("#app");

  let products = [];
  let page = 1;


  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const data = await res.json();

      if (data && data.products) {
        products = data.products;
        render();
      }
    } catch (error) {
      console.log("Error Fetching products", error);
    }
  };

  //Function Render

  const render = () => {
    const productsContainer = document.createElement("div");
    productsContainer.className = "products__container";

    const pagination = document.createElement("div");
    pagination.className = "pagination";

    if (products.length > 0) {
      products.slice(page * 10 - 10, page * 10).forEach((prod) => {
        const productElement = document.createElement("div");
        productElement.className = "product__single";
        productElement.innerHTML = `
                <img src=${prod.thumbnail} alt=${prod.title}/>
                <span>${prod.title}</span>
            `;
        productsContainer.appendChild(productElement);
      });

      if (page > 1) {
        const prevButton = createPaginationButton("⏮️", () =>
          selectPageHandler(page - 1)
        );
        pagination.appendChild(prevButton);
      }

      //number buttons
      for (let i = 0; i < products.length / 10; i++) {
        const pageButton = createPaginationButton(
          i + 1,
          () => selectPageHandler(i + 1),
          page === i + 1
        );
        pagination.appendChild(pageButton);
      }

      if (page < products.length / 10) {
        const nextButton = createPaginationButton("⏭️", () =>
          selectPageHandler(page + 1)
        );
        pagination.appendChild(nextButton);
      }
    }
    app.innerHTML = "";
    app.appendChild(productsContainer);
    app.appendChild(pagination);
  };

  const createPaginationButton = (text, clickHandler, isSelected = false) => {
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("button", clickHandler);
    if (isSelected) {
      button.classList.add("pagination__selected");
    }
    return button;
  };

  const selectPageHandler = (selectedPage) => {
    if(selectedPage < 1 && selectedPage > products.length / 10 && selectedPage !== page) {
        page = selectedPage;
        render();
    }
  };

  fetchProducts();
});
