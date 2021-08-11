export const addToCart = id => {
  return {
    type: "ADD_TO_CART",
    id,
  };
};

export const removeToCart = id => {
  return {
    type: "REMOVE_TO_CART",
    id,
  };
};

export const qtyInc = id => {
  return {
    type: "QTY_INC",
    id,
  };
};
export const qtyDec = id => {
  return {
    type: "QTY_DEC",
    id,
  };
};
