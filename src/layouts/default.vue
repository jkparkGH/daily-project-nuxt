<template>
  <div>
    <CommonHeader />
    <nuxt />
    <CommonFooter />
    <CommonMoveTop />
    <LoginSignUpModal />
    <TodaysView />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@nuxtjs/composition-api';
import {
  // useNamespacedActions,
  useNamespacedMutations,
} from 'vuex-composition-helpers';

import CommonHeader from '@/components/layouts/common-header.vue';
import CommonFooter from '@/components/layouts/common-footer.vue';
import CommonMoveTop from '@/components/layouts/common-move-top.vue';
import LoginSignUpModal from '@/components/layouts/login-signup-modal.vue';
import TodaysView from '@/components/layouts/todays-view.vue';

export default defineComponent({
  name: 'LayoutDefaultComponent',
  components: {
    CommonHeader,
    CommonFooter,
    CommonMoveTop,
    LoginSignUpModal,
    TodaysView,
  },
  setup() {
    // TODO: fix -> Action을 사용하고싶은데, commit만 호출하는 Action은 Error를 반환하는상태
    // const { INIT_TODAYS_VIEW_LIST } = useNamespacedActions('todaysview', ['INIT_TODAYS_VIEW_LIST']);
    const { initTodaysViewList } = useNamespacedMutations('todaysview', ['initTodaysViewList']);

    onMounted(() => {
      initTodaysViewList();
    });
  },
});
</script>

<style lang="scss">
/* Empty tag && need this remark :: Don't remove */
</style>
