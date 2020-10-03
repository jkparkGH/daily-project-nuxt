<template>
  <div>
    <CommonHeader />
    <nuxt />
    <CommonFooter />
    <LoginSignUpModal />
  </div>
</template>

<script>
import CommonHeader from "@/components/common/common-header";
import CommonFooter from "@/components/common/common-footer";
import LoginSignUpModal from "@/components/common/login-signup-modal";
export default {
  name: "Layout-default",
  components: {
    CommonHeader,
    CommonFooter,
    LoginSignUpModal
  }
};
</script>
