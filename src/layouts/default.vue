<template>
  <div>
    <CommonHeader />
    <nuxt />
    <LoginSignUpModal />
  </div>
</template>

<script>
import CommonHeader from "@/components/common/common-header";
import LoginSignUpModal from "@/components/common/login-signup-modal";
export default {
  name: "Layout-default",
  components: {
    CommonHeader,
    LoginSignUpModal
  }
};
</script>

<style></style>
