
// import { sum, square } from './js/util.js'
// import  './js/login.js'
// const getInfo = require('./js/api.js')
// console.log(sum(10,20));

// console.log(square(10));

// console.log(getInfo());
// import './js/Image.js'

import { createApp } from "vue";
import App from "./App.vue"
import loadingDirective from "./components/loading.js"


const app = createApp(App);
app.directive('loading', loadingDirective)
app.mount('#app')

const axios = require('axios');
// const title = '前端'
// const foo = () => {
//     console.log(title);
// }

// foo();

// const p1 = new Promise((resolve, reject) => {
//     console.log(resolve);
// })
// console.log(p1);

// if(module.hot) {
//     module.hot.accept('./js/login.js')
// }

axios.get('http://localhost:8080/api/users').then((res)=>{
    console.log(res);
});
