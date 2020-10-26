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

<script>
import { mapActions } from 'vuex';
import CommonHeader from '@/components/layouts/common-header';
import CommonFooter from '@/components/layouts/common-footer';
import CommonMoveTop from '@/components/layouts/common-move-top';
import LoginSignUpModal from '@/components/layouts/login-signup-modal';
import TodaysView from '@/components/layouts/todays-view';
export default {
  name: 'Layout-default',
  components: {
    CommonHeader,
    CommonFooter,
    CommonMoveTop,
    LoginSignUpModal,
    TodaysView
  },
  methods: {
    ...mapActions({
      INIT_TODAYS_VIEW_LIST: 'todaysview/INIT_TODAYS_VIEW_LIST'
    })
  },
  mounted() {
    this.INIT_TODAYS_VIEW_LIST(this);
  }
};
</script>

<style lang="scss">
/* Empty tag && need this remark :: Don't remove */
</style>
