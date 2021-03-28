import { AxiosClient } from '@/utils/AxiosClient';
import { IProduct } from '@/models';

interface ProductReadManyResponse {
  products: IProduct[];
}

class ProductService extends AxiosClient {
  async readMany() {
    const response = await this.http.get<ProductReadManyResponse>('');

    return response.data;
  }

  async readOne(uid: IProduct['uid']) {
    const response = await this.http.get<IProduct>(`/${uid}`);

    return response.data;
  }
}

export const productService = new ProductService('/products');
