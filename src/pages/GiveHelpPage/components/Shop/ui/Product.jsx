import { NavLink } from 'react-router-dom';
const Product = ({ product }) => {
  return (
    <NavLink to="/redirect">
      <div className="shop__inner-item">
        <div className="shop__inner-item-image">
          <img src={product.preview_image} width={330} height={430} alt="" />
        </div>
        <div className="shop__inner-item-description">
          <h4>{product.name}</h4>
          <p>{product.price}р</p>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
