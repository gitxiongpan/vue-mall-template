import Cookies from 'js-cookie'
const TokenKey = 'vue_mall_template_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  console.log('setToken:' + token)
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
