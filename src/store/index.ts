import Vuex from 'vuex';
import { getModule, config } from 'vuex-module-decorators';
import uiInteraction from '@/store/modules/ui-interaction';
import todaysview from '@/store/modules/todaysview';
import productModule from '@/store/modules/products';
import searchFilterModule from '@/store/modules/searchFilter';

config.rawError = true;

const store = new Vuex.Store<any>({
  modules: {
    uiInteraction,
    todaysview,
    products: productModule,
    searchFilter: searchFilterModule,
  },
});

export default () => {
  return store;
};

export const productStore = getModule(productModule, store);
export const searchFilterStore = getModule(searchFilterModule, store);
export const todaysviewStore = getModule(todaysview, store);
