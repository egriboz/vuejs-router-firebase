<template>
  <section class="contact">
    <div class="columns">
      <div class="column">
        <img class="thumb" :src="contact.img">
      </div>
      <div class="column">
        <p>{{contact.text}}</p>
      </div>
    </div>
  </section>
</template>

<script>
// import { db } from '../firebase'
import db from '../firebase'

export default {
  name: 'Contact',
  firebase: {
    contact: {
      source: db.ref('contact'),
      asObject: true
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App *'
    }
  }
}
// export default {
//   name: 'HomePage',
//   data () {
//     return {
//       msg: 'Welcome to Your Vue.js App *'
//     }
//   }
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ol {
  width: 400px;
  margin: 0 auto;
  text-align: left;
}
ul {
  list-style-type: none;
  /* padding: 0; */
}
ul li {
  display: inline-block;
  margin: 0 10px;
}
a {
  display: block;
  color: #42b983;
}
</style>
