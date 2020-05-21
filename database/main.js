import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false
const config = {
 apiKey: 'AIzaSyDIZArcoX9BFAu8FpR2t4QIwrsV7D0I9U8',
 projectId: 'test-f2b32.firebaseapp.com',
 authDomain: 'test-f2b32.firebaseapp.com',
 databaseURL: 'https://test-f2b32.firebaseio.com',
 storageBucket: 'test-f2b32.appspot.com',
}

firebase.initializeApp(config);

export default firebase;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
