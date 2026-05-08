import { Outlet } from 'react-router-dom';

const ProductsLayout = () => {
  return (
    <div>
      <h1>Products</h1>
      <Outlet />
    </div>
  );
};

export default ProductsLayout;