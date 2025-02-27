import { getAxios } from '@/plugins/axios'

const axios = getAxios()

// 获取热门分类
export const getCategories = () => { return axios.get('/dev-api/categories') }

// 获取分类详情
export const getSorts = (id) => { return axios.get('/dev-api/sorts', { params: { id }}) }

// 获取商品列表
export const getProducts = (params) => { return axios.get('/order/token_sku/list/', { params }) }

// 获取商品详情
export const getProductById = (id) => { return axios.get(`/dev-api/product/${id}`) }

// 获取规格商品
export const getProductSku = (id) => { return axios.get(`dev-api/product/sku/${id}`) }

// 获取购物车列表
export const getCarts = () => { return axios.get('/dev-api/carts') }

// 添加到购物车
export const addCarts = (data) => { return axios.post('/dev-api/cart', data) }

// 获取手机验证码
export const sendMobileCode = (data) => { return axios.get('/auth/mobile-code', data) }

// 用户登录
export const userLogin = (data) => { return axios.post('/auth/login', data) }

// 获取用户信息
export const getUserInfo = () => { return axios.get('/user/profile-info') }

// 获取首页轮播图
export const getBanners = () => { return axios.get('/dev-api/banners') }

export const getOrders = (params) => { return axios.get('/order/order-list', { params }) }
