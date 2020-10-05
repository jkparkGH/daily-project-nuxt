<template>
  <div>
    <CommonHeader />
    <nuxt />
    <CommonFooter />
    <CommonMoveTop />
    <LoginSignUpModal />
  </div>
</template>

<script>
import CommonHeader from "@/components/layouts/common-header";
import CommonFooter from "@/components/layouts/common-footer";
import CommonMoveTop from "@/components/layouts/common-move-top";
import LoginSignUpModal from "@/components/layouts/login-signup-modal";
export default {
  name: "Layout-default",
  components: {
    CommonHeader,
    CommonFooter,
    CommonMoveTop,
    LoginSignUpModal
  }
};
</script>
