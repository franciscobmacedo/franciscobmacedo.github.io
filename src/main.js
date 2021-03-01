import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  // created() {
  //   if (sessionStorage.redirect) {
  //     const redirect = sessionStorage.redirect
  //     delete sessionStorage.redirect
  //     this.$router.push(redirect)
  //   }
  // }

}).$mount('#app')
