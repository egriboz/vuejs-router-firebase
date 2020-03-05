<template>
  <section class="hello">
    <div class="columns">
      <div class="column is-11 has-text-left">
        <h1 class="title">Person</h1>
      </div>
    </div>
    <div class="columns is-multiline is-tablet">
      <!-- <paginate
        name="persons"
        :list="entries"
        :per="3"
        tag="div"
      > -->
      <div class="column is-4" v-for="(item, index) in persons" v-bind:item="item" :key="item.id">
        <article class="box">
          <router-link :to="{ name: 'persons', params: { index: index } }">
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
      <!-- </paginate>
      <paginate-links
        for="persons"
        :async="true"
        :show-step-links="true"
        :step-links="{
          next: 'Next',
          prev: 'Previous'
        }"
        :classes="{
          'ul': 'pagination',
          'ul > li': 'page-item',
          'ul > li > a': 'page-link',
        }"
      >
      </paginate-links> -->
    </div>

   <!--  <paginate
      name="blogs"
      :list="entries"
      :per="3"
      tag="div"
    >
      <section v-for="item in paginated('blogs')" v-bind:item="item" :key="item.id">
        <h2>{{ item.title }}</h2>
        <hr>
      </section>
    </paginate>

    <paginate-links
      for="blogs"
      :async="true"
      :show-step-links="true"
      :step-links="{
        next: 'Next',
        prev: 'Previous'
      }"
      :classes="{
        'ul': 'pagination',
        'ul > li': 'page-item',
        'ul > li > a': 'page-link',
      }"
    >
    </paginate-links> -->
  </section>
</template>

<script>
// import { db } from '../firebase'
import db from '../firebase'

export default {
  name: 'Persons',
  firebase: {
    persons: db.ref('entries')
  },
  data () {
    return {
      entries: [],
      paginate: ['persons']
    }
  }
}
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
