<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 mt-5">
        <h1>Edit price alert</h1>
        <form @submit.prevent="submit_form">


          <div class="input-group mb-3">
            <select class="form-control form-control-lg"  v-model="fields.coin">
              <option v-for="category in categories" :value="category.name">{{ category.name }}</option>
            </select>
          </div>

          <div class="input-group mb-3">
            <input type="number" v-model="fields.price" class="col-6 text-center input-group-lg">
            <div class="input-group-append input-group-lg me-4">
              <span class="input-group-text">EUR</span>
            </div>
            <input type="number" v-model="fields.change" class="col-3 form-control text-center">
            <div class="input-group-append input-group-lg">
              <span class="input-group-text">%</span>
            </div>
          </div>

          <div class="form-group input-group-lg">
            <label for="note">Add a note</label>
            <input type="text" v-model="fields.note" class="form-control">
          </div>

          <button type="submit" class="btn btn-primary btn-lg form-control mt-3">Update alert</button>
        </form>
      </div>

    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      categories: [
        {
          "id" : 1,
          "name" : "bitcoin",
        },
        {
          "id" : 2,
          "name" : "etherium",
        },
        {
          "id" : 3,
          "name" : "bitcojkjkjk",
        },
      ],
      fields: {
        coin: '',
        price: '',
        change: '',
        note: ''
      }

    }
  },
  mounted() {
    axios.get('/price_alerts/' + this.$route.params.id)
    .then(response => {
      this.fields = response.data.data
    })
  },
  methods: {
    submit_form() {
      this.form_submitting = true;



      axios.put('price_alerts/' + this.$route.params.id, this.fields)
          .then( response => {
            this.$router.push('/price_alert_list');
            this.form_submitting = false;
          });
    },
  }
}

</script>

<style>

</style>