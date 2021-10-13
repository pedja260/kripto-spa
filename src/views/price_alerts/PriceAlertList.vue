<template>
  <div class="container">
    <h1>Price Alert</h1>
    <table class="table">
      <thead>
      <tr>
        <th>Id</th>
        <th>Coin</th>

        <th>price</th>
        <th>change</th>
        <th>note</th>
        <th>created_at</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="alert in price_alerts">
        <th>{{ alert.id }}</th>
        <td>
          <router-link to="data.path">
            {{ alert.coin }}
          </router-link>

        </td>

        <td>{{ alert.price }}</td>
        <td>{{ alert.change }}</td>
        <td>{{ alert.note }}</td>
        <td>{{ alert.created_at }}</td>
        <td>
          <router-link class="btn btn-info btn-sm" :to="{ name: 'alert.edit', params: { id: alert.id } }">Edit</router-link>
          <button @click="destroy(alert.id)" class="btn btn-danger btn-sm">Delete</button>
        </td>
      </tr>

      </tbody>
    </table>
  </div>

</template>

<script>
import axios from 'axios';
export default {
  name: "PriceAlertList",
  data() {
    return {
      price_alerts: [],
    }
  },
  mounted() {
    axios.get('price_alerts').then(response => {
      this.price_alerts = response.data.data;
    });
  },
  methods: {
    destroy(id) {

      axios.delete('price_alerts/' + id)
          .then( response => {
            
            this.$router.push('/price_alert_list');

          });
    }
  },
}
</script>

<style scoped>

</style>