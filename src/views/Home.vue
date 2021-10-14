<template>
  <div class="container">
    <h1>List currencies</h1>
    <table class="table">
      <thead>
      <tr>
        <th>Coin</th>
        <th>Symbol</th>
        <th>Price</th>
        <th>1H</th>
        <th>24h</th>
        <th>Market Cap</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody class="text-left">
      <tr v-for="list in coin_lists">

        <td>
            <img :src="list.image" style="width:30px;" alt="" />
            {{ list.name }}
        </td>
        <td>{{ list.symbol }}</td>

        <td>Eur {{ list.current_price }}</td>
        <td>{{ list.ath_change_percentage }}%</td>
        <td>{{ list.high_24h }}%</td>
        <td>{{ list.market_cap }}</td>
        <td><router-link :to="{ name: 'coinshow', params: { id: list.id }} ">Show coin</router-link></td>
      </tr>

      </tbody>
    </table>



  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      posts: [],
      coin_lists: [],

    }
  },
  created() {
    axios.get ('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=price_change_percentage')
      .then(res =>this.coin_lists = res.data)
      .catch(error => console.log(error.response.data))
  },
  mounted() {
    axios.get('posts' )
      .then(response => this.posts = response.data.data )
      .catch(error => console.log(error.response.data))
  }
}
</script>
<style>
th {
  text-align: left;
}

td {
  text-align: left;
}

th a{
  text-align: left;

}
</style>
