import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions";

const Products = () => {
  const product = useSelector(state => state.productReducer);
  const Cart = useSelector(
    state =>
      (state.productReducer &&
        state.productReducer.cart.length > 0 &&
        state.productReducer.cart) ||
      []
  );

  console.log("Cart::", Cart);
  const dispatch = useDispatch();
  const addCart = item => {
    // let cart_item = Cart.filter(c_item => item.id == c_item.id);
    // if (cart_item.length > 0) {
    //   item["qty"] = parseInt(cart_item[0]["qty"] + 1);
    // } else {
    //   item["qty"] = 1;
    // }
    // console.log("item:", item);
    dispatch(addToCart(item));
  };
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          {product.product.map(elem => {
            return (
              <div className=" col-lg-6 col-md-6 col-sm-12" key={elem.id}>
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                  <div className="row g-0">
                    <div className="col-md-4 col-sm 4">
                      <img
                        className="img-fluid"
                        src={elem.img}
                        alt={elem.title}
                      />
                    </div>
                    <div className="col-md-8 col-sm-8">
                      <div className="card-body">
                        <h5 className="card-title">{elem.title} </h5>
                        <p className="card-text">{elem.dec}</p>
                        <div className="d-flex justify-content-around align-items-center">
                          <h2 className="price ">$ {elem.price}</h2>
                          <button
                            className="btn btn-primary btn-sm"
                            // disabled={
                            //   Cart &&
                            //   Cart.length > 0 &&
                            //   Cart.filter(e => e.id === elem.id).length > 0
                            //     ? true
                            //     : false
                            // }
                            onClick={() => addCart(elem)}
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
