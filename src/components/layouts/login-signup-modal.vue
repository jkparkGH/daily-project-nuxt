<template>
  <!-- Login -->
  <div class="login-modal" v-show="false">
    <div class="login-modal__content">
      <div class="template-login">
        <button
          type="button"
          class="btn-modal-close"
          aria-label="close button in modal"
          title="close button in modal"
        >
          X
        </button>
        <!-- type: login -->
        <form v-if="true">
          <div class="template-login__content">
            <h4 class="template-login__title">Login</h4>
            <h5 class="template-login__subtitle">Email</h5>
            <div class="template-login__textfield">
              <input type="text" />
            </div>
            <h5 class="template-login__subtitle">Password</h5>
            <div class="template-login__textfield">
              <input type="password" />
            </div>
            <a class="template-login__link-text" href="#_"
              >Forget your password?</a
            >
            <div class="template-login__button-container">
              <button
                type="button"
                class="btn-modal"
                aria-label="close button in modal"
                title="close button in modal"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn-modal bg_pink"
                aria-label="confirm button in modal"
                title="confirm button in modal"
              >
                OK
              </button>
            </div>
          </div>
          <div class="template-login__switch-template">
            <p>Have not joined yet?</p>
            <a class="template-login__link-text" href="#_">Sign up</a>
          </div>
        </form>
        <!-- type: sign up -->
        <form v-else>
          <div class="template-login__content">
            <h4 class="template-login__title">Sign up</h4>
            <h5 class="template-login__subtitle">Email</h5>
            <div class="template-login__textfield">
              <input type="text" />
            </div>
            <h5 class="template-login__subtitle">Password</h5>
            <div class="template-login__textfield">
              <input type="password" />
            </div>
            <h5 class="template-login__subtitle">Confirm Password</h5>
            <div class="template-login__textfield">
              <input type="password" />
            </div>
            <div class="template-login__button-container">
              <button
                type="button"
                class="btn-modal"
                aria-label="close button in modal"
                title="close button in modal"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn-modal bg_pink"
                aria-label="confirm button in modal"
                title="confirm button in modal"
              >
                OK
              </button>
            </div>
          </div>
          <div class="template-login__switch-template">
            <p>Already signed up?</p>
            <a class="template-login__link-text" href="#_">Login</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login-signup-modal"
};
</script>

<style lang="scss">
$modules: "login-modal";
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
  transition: all 0.3s ease-out;

  &:before {
    width: 0;
    height: 100%;
    position: relative;
    vertical-align: middle;
    display: inline-block;
    overflow: hidden;
    content: "";
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
  }

  &.hide .login-modal__content {
    transform: translateY(-30px);
  }
}

/* modal : Login */
$modules: "template-login";
.#{$modules} {
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
  }

  &__textfield input {
    border: 0;
    width: 100%;
    display: block;
    margin: 0 auto;
    padding: 0.5rem 0.3rem;
    outline: 0;
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
  }

  .btn-modal.bg_pink {
    background-color: #fe708a;
    color: #fff;
    border-color: #fe708a;
  }

  &__switch-template {
    text-align: center;
    padding: 0.78rem 0;
    background-color: #efefef;
  }

  &__switch-template p {
    padding-top: 0.5rem;
    color: #454545;
    font-size: 0.813rem;
  }
}
</style>
