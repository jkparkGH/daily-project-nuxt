import axiosModule from "@/assets/js/axiosModule";
// dummy
import dummyData from "@/store/data/dummy.js";

const state = () => ({
  products: [
    {
      uid: null,
      name: "",
      gender: "",
      new: false,
      sale: false,
      beforePrice: 0,
      crrPrice: 0,
      images: ""
    }
  ],
  productDetailData: {
    uid: null,
    name: "",
    gender: "",
    new: false,
    sale: false,
    beforePrice: 0,
    crrPrice: 0,
    images: "",
    summary: "",
    infoList: {
      info: "",
      reviews: "",
      shipping: ""
    }
  },
  getProductsProcessing: false,
  getProductDetailsProcessing: false
});
const getters = {
  products: state => {
    return state.products;
  },
  productDetailData: state => {
    return state.productDetailData;
  }
};
const mutations = {
  setStateProducts(state, productsList = []) {
    if (Array.isArray(productsList)) {
      state.products = [...productsList];
      console.log("## setStateProducts ##", state.products);
    }
  },
  setStateProductDetail(state, detailData = {}) {
    state.productDetailData = { ...detailData };
    console.log("## setStateProductDetail ##", state.productDetailData);
  },
  addProductDetailData(state, crrUid) {
    let result = dummyData.dummyList.find(el => el.uid === parseInt(crrUid));
    state.productDetailData = { ...state.productDetailData, ...result };
    console.log("## addProductDetailData ##", state.productDetailData);
  }
};
const actions = {
  GET_PRODUCTS({ commit, state }, params) {
    return new Promise((resolve, reject) => {
      if (!state.getProductsProcessing) {
        state.getProductsProcessing = true;
        axiosModule.get({
          url: "/products",
          reqData: {
            uuid: "test"
          },
          responseHandler: response => {
            commit("setStateProducts", response.products);
            // resolve();
          },
          errorHandler: reject,
          callback: () => {
            console.log("# callback #");

            commit("setStateProducts", dummyData.dummyList);
            resolve();
            state.getProductsProcessing = false;
          }
        });
      }
    });
  },
  GET_PRODUCT_DETAIL({ commit, state }, params) {
    return new Promise((resolve, reject) => {
      if (!state.getProductDetailsProcessing) {
        state.getProductDetailsProcessing = true;
        axiosModule.get({
          url: `/product-detail/${params.uid}`,
          responseHandler: response => {
            commit("setStateProductDetail", response.products);
            resolve();
          },
          errorHandler: reject,
          callback: () => {
            commit("setStateProductDetail", dummyData.dummyDetails);
            commit("addProductDetailData", params.uid);
            resolve();
            state.getProductDetailsProcessing = false;
          }
        });
      }
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
