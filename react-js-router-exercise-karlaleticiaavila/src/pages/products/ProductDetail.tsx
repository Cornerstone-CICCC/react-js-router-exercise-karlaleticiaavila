import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  brand: string;
  thumbnail: string;
};

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(
        `https://dummyjson.com/products/${id}`
      );

      const data = await response.json();
      setProduct(data);
    };

    getProduct();
  }, [id]);

  if (!product) {
    return <p>Loading product...</p>;
  }

  return (
    <div>
      <Link to="/products">Back to products</Link>

      <h2>{product.title}</h2>
      <img src={product.thumbnail} width="200" />
      <p>{product.description}</p>
      <p>Brand: {product.brand}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;