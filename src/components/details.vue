<template>
  <section class="details">
    <div class="columns">
      <div class="column is-11 has-text-left">
        <h1 class="title">{{entry.title}}</h1>
      </div>
      <div class="column has-text-right">
        <router-link :to="{ name: 'HomePage'}"><a class="button">Back</a></router-link>
      </div>
    </div>
    <div class="columns box">
      <div class="column">
        <h1>{{entry.title}}</h1>
        <h2 class="tag is-warning">{{entry.house}}</h2>
        <h3>{{entry.date}}</h3>
        <p>
          {{entry.text}}
        </p>
      </div>
      <div class="column">
        <figure class="image is-128x128" :style="{ 'position': 'absolute'}">
          <img :src="entry.logo" class="">
        </figure>
        <img :src="entry.img">
      </div>
    </div>
  </section>
  <!-- <pre>{{ entry }}</pre>
    <div v-for="entry in entries" v-bind:item="entry" :key="entry.id">
      <div class="box" v-if="itemId == entry.id">
        <div class="columns">
          <div class="column">
            <h1><span class="tag is-success">{{entry.id}}</span> {{entry.title}}</h1>
            <h2>{{entry.house}}</h2>
            <h3>{{entry.date}}</h3>
            <p>
              {{entry.text}}
            </p>
          </div>
          <div class="column">
            <img :src="entry.logo" :style="{ 'position': 'absolute'}">
            <img :src="entry.img">
          </div>
        </div>

      </div>
  </div> -->
</template>

<script>
// import { db } from '../firebase'
import db from '../firebase'

// export default {
//   data () {
//     return {
//       itemId: this.$route.params.pageId,
//       entries: []
//     }
//   },
//   created: function () {
//     console.log('entries')
//   },
//   firebase: {
//     entries: db.ref('entries')
//   }
// }

// 2.
export default {
  data () {
    return {
    }
  },
  firebase () {
    return {
      entry: {
        source: db.ref('entries/' + this.$route.params.index),
        asObject: true
      }
    }
  }
  // firebase: {
  //   entries: {
  //     source: db.ref('entries/' + location.pathname.substring(5, location.pathname.length)),
  //     asObject: true
  //   }
  // }
}

// 3. çözüm olmadı
// const postsRef = db.ref('entries')

// export default {
//   firebase: {
//     post: {
//       source: postsRef
//     }
//   },
//   created: function () {
//     this.getPost()
//   },
//   data: function () {
//     return {
//       post: {}
//     }
//   },
//   watch: {
//     $route: 'getPost'
//   },
//   methods: {
//     getPost: function () {
//       this.$firebaseRefs.items.child('/entries/' + this.$route.params.id).then(function (res) {
//         this.post = res.body
//       })
//     }
//   }
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.details {
  margin-bottom: 30px;
}
h1 {
  font-size: 24px;
}
h2 {
  font-size: 18px;
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
