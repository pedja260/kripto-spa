import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from "../views/admin/Admin";
import About from "../views/About";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import PriceAlertList from "../views/price_alerts/PriceAlertList";
import PriceAlertCreate from "../views/price_alerts/PriceAlertCreate";
import PriceAlertEdit from "../views/price_alerts/PriceAlertEdit";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/price_alert_list',
    name: 'alert.index',
    component: PriceAlertList,
  },
  {
    path: '/price_alert_list/create',
    name: 'alert.create',
    component: PriceAlertCreate,
  },
  {
    path: '/edit/:id',
    name: 'alert.edit',
    component: PriceAlertEdit,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
