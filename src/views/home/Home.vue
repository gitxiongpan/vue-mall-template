<template>
  <van-pull-refresh v-model="isLoading" class="home" @refresh="onRefresh">
    <!-- 搜索组件 -->
    <!-- <search-bar /> -->
    <!-- 轮播图组件 -->
    <!-- <banner-swipe :banners="banners" /> -->
    <!-- 热门分类 -->
    <!-- <hot-category :categories="categories" /> -->
    <!-- 商品列表 -->

    <h2 class="text-center">萌萌模玩金币购买</h2>
    <product-list :products="products" :count="count" />
  </van-pull-refresh>
</template>

<script>
import { getProducts } from '@/api'
import { PullRefresh } from 'vant'
// import SearchBar from './components/SearchBar'
// import BannerSwipe from './components/BannerSwipe'
// import HotCategory from './components/HotCategory'
import ProductList from './components/ProductList'
export default {
  name: 'Home',
  components: {
    [PullRefresh.name]: PullRefresh,
    // SearchBar,
    // BannerSwipe,
    // HotCategory,
    ProductList
  },
  data: () => ({
    banners: [],
    categories: [],
    products: [],
    count: 0,
    isLoading: false
  }),
  created() {
    this.initData()
  },
  methods: {
    async onRefresh() { // 下拉刷新
      const products = await getProducts()
      this.products = products
      this.$toast.success('刷新成功')
      this.isLoading = false
    },
    async initData() {
      // const { data: banners } = await getBanners()
      // const { data: categories } = await getCategories()
      const products = await getProducts()
      // this.banners = banners
      // this.categories = categories
      this.products = products
    }
  }
}
</script>

<style>
  .text-center{
    text-align: center;
  }
</style>
