import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  CREATE_PRODUCT,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_ERROR
} from "../actions";

const product_reducer = (state, action) => {
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true };
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const new_arrivals = action.payload.filter(
      (product) => product.newArrival === true
    );

    const women = action.payload.filter(
      (product) => product.category === "Female"
    );
    const men = action.payload.filter((product) => product.category === "Male");
    return {
      ...state,
      products_loading: false,
      products: action.payload,
      new_arrivals,
      women,
      men,
    };
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, products_error: true };
  }

  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return {
      ...state,
      single_product_loading: true,
      single_product_error: false,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      single_product_loading: false,
      single_product: action.payload,
    };
  }

  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: true,
    };
  }
  if (action.type === CREATE_PRODUCT) {
    return {
      ...state,
      create_product: action.payload
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default product_reducer;
