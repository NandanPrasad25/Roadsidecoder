import { useEffect } from "react";
import { useState } from "react"


function App() {

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://dummyjson.com/products?limit=${page*10}`);
      const data = await res.json();

      if (data) 
        setProducts(data)
        setPage(prev => prev + 1)
        console.log("fetch products")

    } catch (error) {
      console.log("Error fetching products", error)
    }
    finally {
      setLoading(false);
    }
  }

  const {products:allProducts} = products;
  console.log(products.limit)


  useEffect(() => {
    fetchProducts();
  }, [])

  const handleScroll = () => {
    if ( window.innerHeight + document.documentElement.scrollTop + 500 > document.documentElement.offsetHeight && !loading ) {
      fetchProducts();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="products">
      {allProducts?.length > 0 && allProducts?.map((prod) => {
        return <div key={prod.id} className="product__single">
          <img src={prod.thumbnail} alt={prod.title} />
          <span>{prod.title}</span>
        </div>
      })}
      {loading && <div>Loading...</div>}
    </div>
  )
}

export default App
