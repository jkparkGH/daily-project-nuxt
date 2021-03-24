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
import { defineComponent } from '@nuxtjs/composition-api';

import { mapActions } from 'vuex';
import CommonHeader from '@/components/layouts/common-header.vue';
import CommonFooter from '@/components/layouts/common-footer.vue';
import CommonMoveTop from '@/components/layouts/common-move-top.vue';
import LoginSignUpModal from '@/components/layouts/login-signup-modal.vue';
import TodaysView from '@/components/layouts/todays-view.vue';

export default defineComponent({
  name: 'Layout-default',
  components: {
    CommonHeader,
    CommonFooter,
    CommonMoveTop,
    LoginSignUpModal,
    TodaysView,
  },
  methods: {
    ...mapActions({
      INIT_TODAYS_VIEW_LIST: 'todaysview/INIT_TODAYS_VIEW_LIST',
    }),
  },
  mounted() {
    this.INIT_TODAYS_VIEW_LIST(this);
  },
});
</script>

<style lang="scss">
/* Empty tag && need this remark :: Don't remove */
</style>
