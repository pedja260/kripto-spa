<template>
  <div class="container">
    <div class="col-md-6 offset-md-3">
        <div>
          <form>
            <h3>Sign Up</h3>

            <div class="form-group">
              <label>Full Name</label>
              <input type="text" name="name" class="form-control form-control-lg"/>
            </div>

            <div class="form-group">
              <label>Email address</label>
              <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>

            <p class="forgot-password text-right">
              Already registered
              <router-link :to="{name: 'Login'}">sign in?</router-link>
            </p>
          </form>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>