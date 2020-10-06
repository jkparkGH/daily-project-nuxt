import Vuex from "vuex";
import uiInteraction from "@/store/modules/ui-interaction";

export default () => {
  return new Vuex.Store({
    namespaced: false,
    modules: {
      uiInteraction
    }
  });
};
