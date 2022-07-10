<template>
  <div class="user-order">
    <div class="user-order__title">我的订单</div>
    <List>
      <OrderCard v-for="order in orders" :key="order.id" :item="order" />
    </List>
  </div>
</template>

<script>
import { List } from 'vant'
import OrderCard from '@/components/OrderCard'
import { getOrders } from '@/api'
export default {
  components: {
    List,
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
  margin-bottom: 70px
  &__title
    padding-bottom 4px
  >>>.van-grid-item__content
    padding 8px
  >>>.van-grid-item__content::after
    border-width 0
</style>
