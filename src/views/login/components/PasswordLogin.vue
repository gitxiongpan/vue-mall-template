<template>
  <van-cell-group class="login-form">
    <van-field v-model="loginForm.mobile" clickable label="手机号" left-icon="manager" placeholder="请输入手机号" />
    <van-field v-model="loginForm.code" label="验证码" clickable left-icon="lock" placeholder="请输入验证码" />
    <van-row type="flex" justify="space-around">
      <!-- <van-button
        plain
        hairline
        type="info"
        class="login-form__register"
        @click="$toast('暂无注册，输入任意内容登录')"
      >注册新账号</van-button> -->
      <van-button plain hairline type="info" class="login-form__register" @click="handleGetCode">获取验证码
      </van-button>
      <van-button :disabled="!loginForm.mobile || !loginForm.code" type="info" class="login-form__login"
        @click="handleLogin">登录</van-button>
    </van-row>
  </van-cell-group>
</template>

<script>
import { CellGroup, Field, Row } from 'vant'
export default {
  name: 'PasswordLogin',
  components: {
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Row.name]: Row
  },
  data: () => ({
    loginForm: {
      mobile: '',
      code: ''
    }
  }),
  methods: {
    async handleGetCode() {
      const res = await this.$store.dispatch('user/getMobileCode', this.mobile)
      if (res) {
        this.loginForm = { username: '', password: '' }
        setTimeout(() => {
          this.$router.push(this.$route.query.redirect)
          this.$toast.success('登录成功')
        }, 200)
      }
    },
    async handleLogin() {
      const res = await this.$store.dispatch('user/login', this.loginForm)
      if (res) {
        this.loginForm = { mobile: '', code: '' }
        setTimeout(() => {
          this.$router.push(this.$route.query.redirect)
          this.$toast.success('登录成功')
        }, 200)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.login-form
  &__login
    width: 40%
    margin: 10px 0
  &__register
    width: 40%
    margin: 10px 0
</style>
