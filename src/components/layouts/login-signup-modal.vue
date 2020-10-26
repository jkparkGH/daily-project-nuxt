<template>
  <!-- Login -->
  <div class="login-modal" v-show="true" :class="{ hide: !showLoginModal }">
    <div class="login-modal__content">
      <div class="template-login">
        <button type="button" class="btn-modal-close" aria-label="close button in modal" title="close button in modal" @click="closeLoginModal">
          ✕
        </button>
        <!-- type: login -->
        <LoginModal :toggleLoginModal="toggleLoginModal" :closeLoginModal="closeLoginModal" v-if="typeLoginModal === 'login'" />
        <!-- type: sign up -->
        <SignupModal :toggleLoginModal="toggleLoginModal" :closeLoginModal="closeLoginModal" v-else />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import LoginModal from '@/components/common/login-modal';
import SignupModal from '@/components/common/signup-modal';
export default {
  name: 'login-signup-modal',
  components: {
    LoginModal,
    SignupModal
  },
  computed: {
    ...mapGetters({
      showLoginModal: 'uiInteraction/showLoginModal',
      typeLoginModal: 'uiInteraction/typeLoginModal'
    })
  },
  methods: {
    ...mapActions({
      TOGGLE_LOGIN_MODAL: 'uiInteraction/TOGGLE_LOGIN_MODAL',
      CHANGE_STATE_LOGIN_MODAL: 'uiInteraction/CHANGE_STATE_LOGIN_MODAL'
    }),
    closeLoginModal() {
      this.TOGGLE_LOGIN_MODAL(false);
    },
    toggleLoginModal() {
      if (this.typeLoginModal === 'login') {
        this.CHANGE_STATE_LOGIN_MODAL('singup');
      } else {
        this.CHANGE_STATE_LOGIN_MODAL('login');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$modules: 'login-modal';
.#{$modules} {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  font-size: 0;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: auto;
  z-index: 20;
  opacity: 1;
  transition: opacity 0.3s ease-out;
  &:before {
    width: 0;
    height: 100%;
    position: relative;
    vertical-align: middle;
    display: inline-block;
    overflow: hidden;
    content: '';
    font-size: 0;
  }
  &__content {
    display: inline-block;
    vertical-align: middle;
    width: 98%;
    padding: 15px 0;
    font-size: 16px;
    font-size: 1rem;
    transition: all 0.3s ease-out;
    transform: translateY(0px);
  }
  &.hide {
    opacity: 0;
    overflow: hidden;
    height: 0;
    width: 0;
  }
  &.hide .login-modal__content {
    transform: translateY(-30px);
  }
}

/* modal : Login */
$modules: 'template-login';
/deep/ .#{$modules} {
  max-width: 400px;
  width: 80%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 5px;
  text-align: left;
  padding: 4rem 0 0;
  position: relative;
  overflow: hidden;
  .btn-modal-close {
    font-size: 1.05rem;
    font-weight: 700;
    line-height: 1;
    color: #000;
    filter: alpha(opacity=20);
    opacity: 0.2;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0.5rem;
    display: block;
    // transform: scaleY(0.84);
  }
  &__content {
    width: 80%;
    margin: 0 auto;
    min-width: 200px;
  }
  &__title {
    font-size: 1rem;
    font-weight: bold;
    color: #343434;
    padding-bottom: 1rem;
  }
  &__subtitle {
    font-size: 0.813rem;
    color: #454545;
    padding-top: 0.78rem;
    padding-bottom: 0.4rem;
  }
  &__textfield {
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
    input {
      border: 0;
      width: 100%;
      display: block;
      margin: 0 auto;
      padding: 0.5rem 0.3rem;
      outline: 0;
    }
  }
  &__link-text {
    color: #fe708a;
    display: block;
    margin: 0.5rem auto;
    font-size: 0.875rem;
    font-weight: bold;
    text-align: center;
  }
  &__button-container {
    padding: 2rem 0 1rem;
    text-align: right;
  }
  .btn-modal {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 60px;
    &.bg_pink {
      background-color: #fe708a;
      color: #fff;
      border-color: #fe708a;
    }
  }
  &__switch-template {
    text-align: center;
    padding: 0.78rem 0;
    background-color: #efefef;
    p {
      padding-top: 0.5rem;
      color: #454545;
      font-size: 0.813rem;
    }
  }
  .error-message {
    font-size: 11px;
    color: #ff5656d9;
    padding-top: 4px;
  }
}
</style>
