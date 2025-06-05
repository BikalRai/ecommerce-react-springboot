import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  currentPage: 0,
  size: 10,
  category: "",
  priceMin: 0,
  priceMax: Number.MAX_SAFE_INTEGER,
  brand: "",
  sortBy: "",
  totalPages: 0,
  isLoading: false,
  status: "idle",
  allProducts: [],
  filteredProducts: [],
  error: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    nextPage(state) {
      if (state.currentPage < state.totalPages) state.currentPage += 1;
    },
    previousPage(state) {
      if (state.currentPage > 1) state.currentPage -= 1;
    },
    // setTotalPages(state, action) {
    //   state.totalPages = action.payload;
    // },
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
      state.priceMin = parseInt(action.payload[0]);
      state.priceMax = parseInt(action.payload[1]);
      state.products = state.allProducts.filter((p) => {
        const price = parseInt(p.price);
        return (
          !isNaN(price) && price >= state.priceMin && price <= state.priceMax
        );
      });
      state.currentPage = 0;
    },
    resetPriceRange(state) {
      state.priceMin = 0;
      state.priceMax = Number.MAX_SAFE_INTEGER;
      state.products = state.allProducts;
      state.currentPage = 0;
    },
    productRequest(state) {
      state.status = "loading";
      state.isLoading = true;
      state.error = null;
    },
    productSuccess(state, action) {
      state.status = "success";
      state.isLoading = false;
      state.allProducts = action.payload.content;
      state.filteredProducts = action.payload.content.filter(
        (p) =>
          parseInt(p.price) >= state.priceMin &&
          parseInt(p.price) <= state.priceMax
      );
      state.totalPages = action.payload.totalPages;
    },
    productFailure(state, action) {
      state.status = "failed";
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setCurrentPage,
  previousPage,
  nextPage,
  setCategory,
  setBrand,
  setSortBy,
  setTotalPages,
  setPriceRange,
  resetPriceRange,
  productRequest,
  productSuccess,
  productFailure,
} = filterSlice.actions;

export function filterProducts() {
  return async (dispatch, getState) => {
    dispatch(productRequest());
    const { page, size, category } = getState().filter;

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

      // console.log(res, "res");
      dispatch(
        productSuccess({
          content: res.data.content,
          totalPages: res.data.totalPages,
        })
      );
      dispatch(setCurrentPage(res.data.pageable.pageNumber + 1));
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
