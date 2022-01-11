import Vue from 'vue'
import App from './App.vue'

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

Vue.prototype.$liff = window.$liff
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
