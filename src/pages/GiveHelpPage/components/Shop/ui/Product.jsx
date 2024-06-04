const Product = ({ product }) => {
  return (
    <div className="shop__inner-item">
      <div className="shop__inner-item-image">
        <a href="./help-chat.html">
          <img src={product.preview_image} width={330} height={430} alt="" />
        </a>
      </div>
      <div className="shop__inner-item-description">
        <h4>{product.name}</h4>
        <p>{product.price}р</p>
      </div>
    </div>
  );
};

export default Product;