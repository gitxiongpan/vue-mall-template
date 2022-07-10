<template>
  <Card :price="item.final_price" :title="item.name"
    :desc="'交易完成 ' + item.modified_time.slice(0, 19).replace('T', ' ')" />
</template>

<script>
import { Card } from 'vant'
export default {
  components: {
    Card
  },
  props: {
    item: {
      type: Object,
      default: () => []
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
