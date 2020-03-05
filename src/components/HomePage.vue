<template>
  <section class="hello">
    <div class="welcome-bg" v-bind:style="{ backgroundImage: 'url(' + welcome.img + ')' }">
      <div class="inner">
        <h1>{{welcome.text}}</h1>
        <h3>{{welcome.description}}</h3>
      </div>
    </div>
    <div class="columns is-multiline is-tablet">
      <div class="column is-4" v-for="(item, index) in entries" v-bind:item="item" :key="item.id">
        <article class="box">
          <router-link :to="{ name: 'persons', params: { index: index } }">
            <!-- <a class="nav-link">index: {{index}}</a> -->
            <!-- <p>
              <small>{{item.date}}</small>
            </p> -->
            <div class="content">
              <img class="profile-img" :src="item.img">
              <p class="title">{{item.title}}</p>
              <p>{{item.text}}</p>
              <hr>
              <img class="thumb" :src="item.logo">
              <p class="subtitle">{{item.house}}</p>
            </div>
          </router-link>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
// import { db } from '../firebase'
import db from '../firebase'

export default {
  name: 'HomePage',
  firebase: {
    entries: db.ref('entries'),
    welcome: {
      source: db.ref('welcome'),
      asObject: true
    },
    about: {
      source: db.ref('about'),
      asObject: true
    },
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
  // ,
  // methods:{
  //   goTodetail(prodId) {
  //     let itemId=prodId
  //     this.$router.push({name:'details', params:{pageId:itemId}})
  //   }
  // }
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
.welcome-bg {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  min-height: 300px;
  background-size: cover;
  background-position: center center;
}
.welcome-bg .inner {
  color: #fff;
  font-weight: bold;
  font-size: 24px;
}
.profile-img {
  width: 100%;
}
h1, h2 {
  font-size: 36px;
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
