import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  dataProduct: [],
  dataProductSearch: [],
  shopingcart: [],
  compareitem: null,
  compareitem2: null,
  compareitem3: null,
  numberofproduct: 0,
  wishList: [],
};

const shopReducer = createSlice({
  name: "shopReducer",
  initialState,
  reducers: {
    getProductsApiAction: (state, action) => {
      state.dataProduct = action.payload;
    },
    addToCartAction: (state, action) => {
      const productCart = state.shopingcart.find(
        (product) => product.pid === action.payload.pid
      );
      if (productCart) {
        productCart.quantityInCart += 1;
      } else {
        state.shopingcart.push(action.payload);
      }
    },
    delProductInCart: (state, action) => {
      const pid = action.payload;
      state.shopingcart = state.shopingcart.filter(
        (product) => product.pid !== pid
      );
    },

    changeQuantity: (state, action) => {
      const { pid, quantityInCart } = action.payload;
      const productCart = state.shopingcart.find(
        (product) => product.pid === pid
      );
      if (productCart) {
        productCart.quantityInCart += quantityInCart;
        if (productCart.quantityInCart < 1) {
          if (window.confirm("Do you want to delete this product?")) {
            state.shopingcart = state.shopingcart.filter(
              (product) => product.pid !== pid
            );
          } else {
            productCart.quantityInCart -= quantityInCart;
          }
        }
      }
    },
    addToCompare: (state, action) => {
      if (!state.compareitem) {
        state.compareitem = action.payload;
      } else if (!state.compareitem2) {
        state.compareitem2 = action.payload;
      } else {
        state.compareitem3 = action.payload;
      }
    },
    changeProductToCompare: (state) => {
      state.compareitem = null;
    },
    changeProductToCompare2: (state) => {
      state.compareitem2 = null;
    },
    changeProductToCompare3: (state) => {
      state.compareitem3 = null;
    },
    updatenumberofproduct: (state, action) => {
      state.numberofproduct = action.payload;
    },
    getProductsSearchApiAction: (state, action) => {
      state.dataProductSearch = action.payload;
    },
    addToWishListAction: (state, action) => {
      state.wishList.push(action.payload);
    },

    delProductInWishList: (state, action) => {
      const pid = action.payload;
      state.wishList = state.wishList.filter((product) => product.pid !== pid);
    },
  },
});

export const {
  getProductsApiAction,
  addToCartAction,
  delProductInCart,
  changeQuantity,
  addToCompare,
  changeProductToCompare,
  changeProductToCompare2,
  changeProductToCompare3,
  getProductsSearchApiAction,
  updatenumberofproduct,
  addToWishListAction,
  delProductInWishList,
} = shopReducer.actions;

export default shopReducer.reducer;

export const getAllProductApi = () => {
  return async (dispatch, getState) => {
    try {
      const result = await axios({
        url: "https://6558bb31e93ca47020a9a821.mockapi.io/products",
        method: "GET",
      });
      const action = getProductsApiAction(result.data);
      dispatch(action);
    } catch (err) {}
  };
};
