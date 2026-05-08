import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();

      setProducts(data.products);
    };

    getProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>
            <Link to={`/products/${product.id}`}>
              {product.title}
            </Link>
          </h3>

          <img src={product.thumbnail} width="100" />
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;