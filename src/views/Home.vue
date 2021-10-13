<template>
  <div class="container">
    <h1>List currencies</h1>
    <table class="table">
      <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>

        <th>symbol</th>

        <th>Action</th>
      </tr>
      </thead>
      <tbody class="text-left">
      <tr v-for="list in coin_lists">
        <th>{{ list.id }}</th>
        <td>
          <router-link to="data.path">
            {{ list.name }}
          </router-link>

        </td>

        <td>{{ list.symbol }}</td>

        <td>
<!--          <router-link class="btn btn-info btn-sm" :to="{ name: 'alert.edit', params: { id: alert.id } }">Edit</router-link>-->
<!--          <button @click="destroy(alert.id)" class="btn btn-danger btn-sm">Delete</button>-->
        </td>
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
    axios.get ('https://api.coingecko.com/api/v3/coins/list?include_platform=true')
    .then(res =>this.coin_lists = res.data)
    .catch(err => console.log(err));
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
