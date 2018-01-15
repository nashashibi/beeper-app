import Vue from 'vue'
import Router from 'vue-router'
import Auth from '../components/Auth'
import Login from '../components/Login'
import Register from '../components/Register'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/auth',
      component: Auth,
      children: [
        {
          path: 'login',
          component: Login
        },
        {
          path: 'register',
          component: Register
        }
      ]
    }
  ]
});
