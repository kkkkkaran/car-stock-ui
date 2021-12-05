<template>
  <html class="h-full bg-gray-50">
  <body class="h-full">
  <Login v-if='!authenticated'></Login>
  </body>
  </html>
</template>

<script>

import Login from '@/components/Login'

export default {
  name: 'App',
  components: {
    Login
  },
  data() {
    return {
        authenticated:false
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
