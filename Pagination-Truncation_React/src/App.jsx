/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Pagination from "./components/pagination";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    let skip = page * 10 - 10;
    try {
      const res = await fetch(
        `https://dummyjson.com/products?_limit=10&skip=${skip}`
      );
      const data = await res.json();
      console.log(skip);

      if (data && data.products) {
        setProducts(data.products);
        console.log(data.products);
      }
    } catch (error) {
      console.log("Error fetching prodcuts", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  return (
    <>
      {" "}
      <div className="products">
        {products.length > 0 &&
          products.map((prod) => (
            <span key={prod.id} className="product__single">
              <img src={prod.thumbnail} alt={prod.title} />
              <span>{prod.title}</span>
            </span>
          ))}
      </div>
      {products.length > 0 && (
        <Pagination products={products} page={page} setPage={setPage} />
      )}
    </>
  );
}
export default App;
