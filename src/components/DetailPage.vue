<template>
  <section class="detailpage">
    <!-- <div v-for="post in entries" v-bind:item="post" :key="post.id">
      {{post.title}}
    </div> -->
    <div class="box" v-for="post in entries" v-bind:item="post" :key="post.id">
      <DetailItem :post="post"></DetailItem> <!-- :index="index" -->
      <!-- <h3 @click="goTodetail()" >{{post.title}}</h3> -->
    </div>
  </section>
</template>

<script>
// import { db } from '../firebase'
import db from '../firebase'
import DetailItem from '@/components/DetailItem'

export default {
  name: 'DetailPage',
  props: ['posts'],
  components: {
    DetailItem
  },
  firebase: {
    entries: db.ref('entries')
  },
  data () {
    return {
      entries: []
    }
  }
  // ,
  // methods:{
  //   goTodetail() {
  //     this.$router.push({name:'DetailPage'})
  //   }
  // }
  //
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
