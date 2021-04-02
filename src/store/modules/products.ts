import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { IProduct } from '@/models';
import { productService } from '@/services';
import mockData from '@/store/data/dummy.js';

let getProductsProcessing = false;
let getProductDetailsProcessing = false;

@Module({
  name: 'products',
  namespaced: true,
  stateFactory: true,
})
class ProductModule extends VuexModule {
  // @State
  products: IProduct[] = [];
  productDetail: IProduct | null = null;

  get getProducts() {
    return this.products;
  }

  get productDetailData() {
    return this.productDetail;
  }

  @Mutation
  setStateProducts(productsList: IProduct[] = []) {
    if (Array.isArray(productsList)) {
      this.products = productsList;
      console.log('## setStateProducts ##', this.products);
    }
  }

  @Mutation
  setStateProductDetail(productDetail: IProduct) {
    this.productDetail = { ...productDetail };
    console.log('## setStateProductDetail ##', this.productDetail);
  }

  @Mutation
  addProductDetailMockData(params: { uid: IProduct['uid'] }) {
    // Mock Data Binding
    const result = mockData.readMany.products.find((el) => Number(el.uid) === Number(params.uid));

    if (!result) {
      return;
    }

    this.productDetail = { ...mockData.readOne, ...result };

    console.log('## addProductDetailMockData ##', this.productDetail);
  }

  @Action({ commit: 'setStateProducts' })
  async GET_PRODUCTS() {
    try {
      if (!getProductsProcessing) {
        getProductsProcessing = true;

        const response = await productService.readMany();

        return response.products;
      }
    } catch (error) {
      console.error(error.message ?? '통신중 오류가 발생하였습니다');
    } finally {
      getProductsProcessing = false;

      return mockData.readMany.products as IProduct[];
    }
  }

  @Action({})
  async GET_PRODUCT_DETAIL(params: { uid: IProduct['uid'] }) {
    try {
      if (!getProductDetailsProcessing) {
        getProductDetailsProcessing = true;

        const response = await productService.readOne({ uid: params.uid });

        return response;
      }
    } catch (error) {
      console.error(error.message ?? '통신중 오류가 발생하였습니다');
    } finally {
      getProductDetailsProcessing = false;
      this.addProductDetailMockData({ uid: params.uid });
    }
  }

  @Action({ commit: 'setStateProductDetail' })
  INIT_PRODUCT_DETAIL() {
    return null;
  }
}

export default ProductModule;
