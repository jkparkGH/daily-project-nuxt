import Vuex from 'vuex';
import uiInteraction from '@/store/modules/ui-interaction';
import products from '@/store/modules/products';
import todaysview from '@/store/modules/todaysview';

export default () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      uiInteraction,
      products,
      todaysview
    }
  });
};
