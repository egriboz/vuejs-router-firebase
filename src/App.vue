<template>
  <div class="container is-fluid" id="app">
    <header class="header">
      <div class="columns">
        <div class="column">
          <router-link :to="{ name: 'HomePage'}" class="logo">
            <img class="logo" src="./assets/logo.png">
          </router-link>
          <ul class="main-menu">
            <router-link :to="{ name: 'HomePage'}" tag="li" active-class="active" exact><a class="nav-link">Home</a></router-link>
            <router-link :to="{ name: 'About'}" tag="li" active-class="active" exact><a class="nav-link">About</a></router-link>
            <router-link :to="{ name: 'Contact'}" tag="li" active-class="active" exact><a class="nav-link">Contact</a></router-link>
          </ul>
        </div>
      </div>
    </header>
    <hr>
    <router-view/>
    <footer class="footer">
      <ul>
        <li>
          <a href="http://router.vuejs.org/" target="_blank">
            vue-router 🌿🥑
          </a>
        </li>
        <li>
          <a href="http://vuex.vuejs.org/" target="_blank">
            vuex
          </a>
        </li>
        <li>
          <a href="http://vue-loader.vuejs.org/" target="_blank">
            vue-loader
          </a>
        </li>
        <li>
          <a href="https://github.com/vuejs/awesome-vue" target="_blank">
            awesome-vue
          </a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.logo {
  width: 50px;
  height: auto;
}
ul.main-menu {
  list-style-type: none;
}
.main-menu li {
  display: inline-block;
}
.main-menu li a{
  padding: 5px 10px;
  text-decoration: none;
}
.main-menu li.active a{
  color: #fff;
  background: #3ab980;
}
.footer ul li {
  display: inline-block;
  margin: 0 10px;
}
.footer a {
  display: block;
  color: #42b983;
}
</style>
