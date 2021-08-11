const initialState = {
  product: [
    {
      id: 1,
      title: "Burger",
      img: "https://www.freeiconspng.com/thumbs/fast-food-png/fast-food-png-most-popular-fast-food-snacks-in-your-area-and-most--3.png",
      dec: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      price: 2,
    },
    {
      id: 2,
      title: "Burger",
      img: "https://www.freeiconspng.com/thumbs/fast-food-png/fast-food-png-most-popular-fast-food-snacks-in-your-area-and-most--3.png",
      dec: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      price: 3,
    },
    {
      id: 3,
      title: "Burger",
      img: "https://www.freeiconspng.com/thumbs/fast-food-png/fast-food-png-most-popular-fast-food-snacks-in-your-area-and-most--3.png",
      dec: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      price: 5,
    },
    {
      id: 4,
      title: "Burger",
      img: "https://www.freeiconspng.com/thumbs/fast-food-png/fast-food-png-most-popular-fast-food-snacks-in-your-area-and-most--3.png",
      dec: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      price: 4,
    },
  ],
  cart: [],
  total: 0,
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log("action", action.id);
      let addedItem = state.product.find(item => item.id === action.id.id);
      console.log("added", addedItem);
      let existed_item = state.cart.find(item => action.id.id === item.id);
      console.log("ex", existed_item);

      // return {
      //   ...state,
      //   cart: [...state.cart, action.id],
      // };
      if (existed_item) {
        addedItem.qty += 1;
        return {
          ...state,
          total: state.total + addedItem.price,
        };
      } else {
        addedItem.qty = 1;
        //calculating the total
        let newTotal = state.total + addedItem.price;

        return {
          ...state,
          cart: [...state.cart, addedItem],
          total: newTotal,
        };
      }
    case "REMOVE_TO_CART":
      let itemToRemove = state.cart.find(item => action.id === item.id);
      let new_items = state.cart.filter(item => action.id !== item.id);
      //calculating the total
      let newTotal = state.total - itemToRemove.price * itemToRemove.qty;
      console.log(itemToRemove);
      console.log(new_items);
      return {
        ...state,
        cart: new_items,
        total: newTotal,
      };

    case "QTY_INC":
      console.log(action.id);
      let item = state.cart.find(item => item.id === action.id);
      console.log("item:::", item);
      item.qty += 1;
      let inc = state.total + item.price;
      return {
        ...state,
        total: inc,
      };
    case "QTY_DEC":
      console.log(action.id);
      let decItem = state.cart.find(item => item.id === action.id);
      console.log("decItem:::", decItem);
      let dec = state.total - decItem.price;
      if (decItem.qty === 1) {
        alert("Minimum 1 Quantity Is Required");
      } else {
        decItem.qty -= 1;
        return {
          ...state,
          total: dec,
        };
      }

    // let b = (state.total = 1 ? 1 : dec);

    default:
      return state;
  }
};
export default productReducer;
