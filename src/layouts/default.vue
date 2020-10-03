<template>
  <div>
    <nuxt/>
    <LoginSignUpModal />
  </div>
</template>

<script>
import LoginSignUpModal from '@/components/common/login-signup-modal.vue'
export default {
  name: 'Layout-default',
  components: {
    LoginSignUpModal
  }
}
</script>

<style>

</style>