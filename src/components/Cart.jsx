import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { qtyDec, qtyInc, removeToCart } from "../actions";

const Cart = () => {
  const global = useSelector(state => state.productReducer);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          {global.cart.length > 0 ? (
            global.cart.map(elem => {
              return (
                <>
                  <div className=" col-lg-6 col-md-6 col-sm-12" key={elem.id}>
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div className="col-md-4 col-sm-4">
                          <img
                            className="img-fluid"
                            src={elem.img}
                            alt={elem.title}
                          />
                        </div>
                        <div className="col-md-8 col-sm-8">
                          <div className="card-body">
                            <h5 className="card-title">
                              {elem.id} {elem.title}
                            </h5>
                            <p className="card-text">{elem.dec}</p>
                            <div className="d-flex justify-content-around align-items-center">
                              <h2 className="price ">$ {elem.price}</h2>

                              <div className="qty d-flex justify-content-center align-items-center">
                                <button
                                  className="btn btn-primary btn-sm d-flex justify-content-center align-items-center"
                                  style={{ height: "20px" }}
                                >
                                  <i
                                    className="fas fa-minus"
                                    onClick={() => dispatch(qtyDec(elem.id))}
                                  ></i>
                                </button>
                                &nbsp;
                                <span>{elem.qty}</span>
                                &nbsp;
                                <button
                                  className="btn btn-primary btn-sm d-flex justify-content-center align-items-center"
                                  style={{ height: "20px" }}
                                >
                                  <i
                                    className="fas fa-plus"
                                    onClick={() => dispatch(qtyInc(elem.id))}
                                  ></i>
                                </button>
                              </div>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => dispatch(removeToCart(elem.id))}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <h1 style={{ textAlign: "center" }}>Cart Empty</h1>
          )}
          <div className="card col-lg-12 col-md-12 col-sm-12 ">
            <h1>Total</h1>
            <h2 className="price">$ {global.total}</h2>
            <div className="btn btn-secondary"> Checkout </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
