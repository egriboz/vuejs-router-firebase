<template>
  <section class="detailpage">
    <div>
      - {{post.title}}
    </div>
  </section>
</template>

<script>
// import { db } from '../firebase'
import db from '../firebase'

export default {
  name: 'detailitem',
  props: ['post', 'index'],
  firebase: {
    entries: db.ref('entries')
  }
}
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
