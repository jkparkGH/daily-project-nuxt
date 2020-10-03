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
import CommonHeader from "@/components/common/common-header";
import CommonFooter from "@/components/common/common-footer";
import CommonMoveTop from "@/components/common/common-move-top";
import LoginSignUpModal from "@/components/common/login-signup-modal";
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
