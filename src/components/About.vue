<template>
  <div class="about">
    <p>{{about.text}}</p>
  </div>
</template>

<script>
// import { db } from '../firebase'
import db from '../firebase'

export default {
  name: 'About',
  firebase: {
    about: {
      source: db.ref('about'),
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
.thumb {
  width: 50px;
  height: auto;
  vertical-align: middle;
}
</style>
