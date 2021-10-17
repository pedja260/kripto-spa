<template>
  <div>
    <h1>Coin show -  {{ coin_list.id }}</h1>
    Current price: {{ coin_list.market_data.current_price }}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "CoinShow",
  data () {
    return {
      coin_list: [

      ],


    }
  },
  mounted() {
    axios.get('https://api.coingecko.com/api/v3/coins/'  + this.$route.params.id)
        .then(response => this.coin_list = response.data )

  }
}
</script>

<style scoped>

</style>