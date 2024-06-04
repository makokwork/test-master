import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { initProducts, selectProducts } from "../../../../store/features/products";
import { ProductsAPI } from "../../../../API";
import Product from "./ui/Product";

function Shop() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    ProductsAPI.getAll()
      .then(products => dispatch(initProducts({ products })))
      .catch(err => console.error(err))
  }, [dispatch])

  return (
    <section className="section container">
      <div className="section__body">
        <div className="shop">
          <div className="shop__title">
            <h3>Вы можете поддержать нас дополнительно</h3>
          </div>

          <div className="shop__inner">
            {products.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shop;
