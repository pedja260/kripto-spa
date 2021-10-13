<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="light" variant="default" class="container">
        <b-navbar-brand href="#">Kriptomat</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/">List currencies</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item>
              <router-link :to="{ name: 'alert.index' }" class="nav-link">Price Alert list</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link :to="{ name: 'alert.create' }" class="nav-link" >Price Alert Create</router-link>
            </b-nav-item>
<!--            <b-nav-item href="/price_alert_list">Price Alert list</b-nav-item>-->
<!--            <b-nav-item href="/price_alert_list/create">Price Alert Create</b-nav-item>-->
<!--            <b-nav-item href="/register">Register</b-nav-item>-->




<!--            <b-nav-item-dropdown right>-->
<!--              &lt;!&ndash; Using 'button-content' slot &ndash;&gt;-->
<!--              <template #button-content>-->
<!--                <em>User</em>-->
<!--              </template>-->
<!--              <b-dropdown-item href="#">Profile</b-dropdown-item>-->
<!--              <b-dropdown-item href="#">Sign Out</b-dropdown-item>-->
<!--            </b-nav-item-dropdown>-->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    window.Echo.channel('channel')
    .listen('Hello', (e) => {
      console.log(e)
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
