<template>
  <div>
    <h1>Coin show  {{ id }}</h1>
  </div>
</template>

<script>
export default {
  name: "CoinShow",
  data () {
    return {
      coin_list: {},


    }
  },
  mounted() {
    axios.get('https://api.coingecko.com/api/v3/coins/'  + this.$route.params.id)
        .then(response => this.coin_list = response.data.data )
        .catch(error => console.log(error.response.data))
  }
}
</script>

<style scoped>

</style>