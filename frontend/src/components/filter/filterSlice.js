import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  page: 0,
  size: 10,
  category: "",
  priceMin: 0,
  priceMax: 1000,
  brand: "",
  sortBy: "",
  totalPages: 0,
  isLoading: false,
  status: "idle",
  products: [],
  error: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    nextPage(state) {
      if (state.page < state.totalPages) state.page + -1;
    },
    previousPage(state) {
      if (state.page > 1) state.page -= 1;
    },
    setTotalPages(state, action) {
      state.totalPages = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setBrand(state, action) {
      state.brand = action.payload;
    },
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
    setPriceRange(state, action) {
      state.priceMin = action.payload[0];
      state.priceMax = action.payload[1];
      state.page = 0;
    },
    productRequest(state) {
      state.status = "loading";
      state.isLoading = true;
      state.error = null;
    },
    productSuccess(state, action) {
      state.status = "success";
      state.isLoading = false;
      state.products = action.payload.content;
      state.totalPages = action.payload.totalPages;
    },
    productFailure(state, action) {
      state.status = "failed";
      state.isLoading = true;
      state.error = action.payload;
    },
  },
});

export const {
  setPage,
  previousPage,
  nextPage,
  setCategory,
  setBrand,
  setSortBy,
  setTotalPages,
  setPriceRange,
  productRequest,
  productSuccess,
  productFailure,
} = filterSlice.actions;

export function filterProducts() {
  return async (dispatch, getState) => {
    dispatch(productRequest());
    const { page, size, category, priceMin, priceMax, brand, sortBy } =
      getState().filter;

    try {
      const res = await axios.get(
        "http://localhost:8080/api/product/products",
        {
          params: {
            page,
            size,
            category,
          },
        }
      );
      dispatch(
        productSuccess({
          content: res.data.content,
          totalpage: res.data.totalPages,
        })
      );
    } catch (error) {
      dispatch(
        productFailure(
          error.response?.data?.message ||
            error.message ||
            "Failed to load products"
        )
      );
    }
  };
}

export default filterSlice.reducer;
