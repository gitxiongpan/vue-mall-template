<template>
  <div class="user">
    <user-navbar />
    <user-info />
    <!-- <user-order /> -->
    <!-- <user-product /> -->
    <UserOrderList />
  </div>
</template>

<script>
import UserNavbar from './components/UserNavbar'
import UserInfo from './components/UserInfo'
import UserOrder from './components/UserOrder'
import UserOrderList from './components/UserOrderList'
// import UserProduct from './components/UserProduct'
export default {
  name: 'User',
  middleware: 'auth',
  components: {
    UserNavbar,
    UserInfo,
    UserOrder,
    UserOrderList
    // UserProduct
  }
}
</script>
