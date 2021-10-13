<template>
  <div class="container">
    <div class="col-md-6 offset-md-3">
      <ul>
        <li v-for="post in posts">{{ post.id }} : {{ post.title}} : {{ post.created_at }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      posts: [],

    }
  },
  mounted() {
    axios.get('posts' )
        .then(response => this.posts = response.data.data )
    .catch(error => console.log(error.response.data))
  }
}
</script>
