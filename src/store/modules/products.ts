import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import mockData from '@/store/data/dummy.js';
import { IProduct } from '@/models';
import { productService } from '@/services';

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

  get getProducts(): IProduct[] {
    return this.products;
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
  addProductDetailMockData(uid: IProduct['uid']) {
    // Mock Data
    const result = mockData.readMany.products.find((el) => el.uid === uid);

    if (!result) {
      return;
    }

    this.productDetail = { ...result };

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
  async GET_PRODUCT_DETAIL(uid: IProduct['uid']) {
    try {
      if (!getProductDetailsProcessing) {
        getProductDetailsProcessing = true;

        const response = await productService.readOne(uid);

        return response;
      }
    } catch (error) {
      alert(error.message ?? '통신중 오류가 발생하였습니다');
    } finally {
      getProductDetailsProcessing = false;
      this.addProductDetailMockData(uid);
    }
  }
}

export default ProductModule;
