<template>
  <nav>
    <router-link to="/">home</router-link> |
    <router-link to="/about">about</router-link> |
    <router-link to="/admin">admin</router-link> |
    <router-link to="/catalog">catalog</router-link> |
    <router-link to="/login">login</router-link> |
    <router-link to="/registration">registration</router-link>
  </nav>
  
  <router-view/>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    
  }),

  watch: {

  },

  methods: {

  },

  computed: {
    
  },

  created() {
    
  }
}
</script>

<style>
  @import "@/styles/css/config.min.css";
</style>
