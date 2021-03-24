<template>
  <form>
    <div class="template-login__content">
      <h4 class="template-login__title">Sign up</h4>
      <div>
        <h5 class="template-login__subtitle">Email</h5>
        <div class="template-login__textfield">
          <input type="text" v-model="userEmail" placeholder="Email을 입력해 주세요" />
        </div>
        <p class="error-message" v-show="userEmail && !checkValidEmail">올바른 형식의 이메일 주소를 입력해 주세요</p>
      </div>
      <div>
        <h5 class="template-login__subtitle">Password</h5>
        <div class="template-login__textfield">
          <input type="password" v-model="userPassword" />
        </div>
        <p class="error-message" v-show="userPassword && !checkValidPassword">8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</p>
      </div>
      <div>
        <h5 class="template-login__subtitle">Confirm Password</h5>
        <div class="template-login__textfield">
          <input type="password" v-model="userPasswordConfirm" />
        </div>
        <p class="error-message" v-show="userPasswordConfirm && !checkValidPasswordConfirm">비밀번호가 일치하지 않습니다.</p>
      </div>
      <div class="template-login__button-container">
        <button type="button" class="btn-modal" aria-label="close button in modal" title="close button in modal" @click="closeLoginModal">
          Cancel
        </button>
        <button type="button" class="btn-modal bg_pink" aria-label="confirm button in modal" title="confirm button in modal">
          OK
        </button>
      </div>
    </div>
    <div class="template-login__switch-template">
      <p>Already signed up?</p>
      <button type="button" class="template-login__link-text" @click="toggleLoginModal">
        Login
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'signup-modal',
  props: {
    toggleLoginModal: {
      type: [Object, Function],
      default: () => {}
    },
    closeLoginModal: {
      type: [Object, Function],
      default: () => {}
    }
  },
  data() {
    return {
      userEmail: '',
      userPassword: '',
      userPasswordConfirm: ''
    };
  },
  computed: {
    checkValidEmail() {
      const email = this.userEmail;
      const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*[.][a-zA-Z]{2,3}$/i;
      return regExp.test(email);
    },
    checkValidPassword() {
      const password = this.userPassword;
      const regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;
      return regExp.test(password);
    },
    checkValidPasswordConfirm() {
      return this.userPassword === this.userPasswordConfirm;
    }
  },
  methods: {}
};
</script>

<style lang="scss"></style>
