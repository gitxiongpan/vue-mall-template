<template>
  <div class="user-order">
    <div class="user-order__title">我的订单</div>
    <!-- <van-grid :column-num="5">
      <van-grid-item icon="card" text="待付款" />
      <van-grid-item icon="shop" text="待发货" />
      <van-grid-item icon="point-gift" text="待收货" />
      <van-grid-item icon="comment" text="评价" />
      <van-grid-item icon="service" text="售后" />
    </van-grid> -->

    <van-grid class="user-product__list" :gutter="6" :column-num="3" :border="false">
      <van-grid-item v-for="order in orders" :key="order.id" :to="`/order/${order.id}`">
        <OrderCard :item="order" />
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { Grid, GridItem } from 'vant'
import OrderCard from '@/components/OrderCard'
import { getOrders } from '@/api'
export default {
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    OrderCard
  },
  data: () => ({
    orders: []
  }),
  created() {
    this.getOrders()
  },
  methods: {
    async getOrders() {
      const data = await getOrders()
      this.orders = data
    }
  }
}
</script>

<style lang="stylus" scoped>
.user-order
  margin: -10px 30px 0 20px
  background: white
  padding: 8px
  border-radius: 10px
  color orange
  &__title
    padding-bottom 4px
  >>>.van-grid-item__content
    padding 8px
  >>>.van-grid-item__content::after
    border-width 0
</style>
