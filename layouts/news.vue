<template>
  <v-layout column justify-space-between align-content-space-between>
    <div class="gl-toolbar">
      <v-layout align-center>
        <nuxt-link to="/landing">
          <v-toolbar-title class="display-1">Norberg</v-toolbar-title>
        </nuxt-link>
        <v-spacer></v-spacer>
        <nuxt-link to="/">
          <v-btn flat dark>HOME</v-btn>
        </nuxt-link>
        <nuxt-link to="/news">
          <v-btn flat dark>NEWS</v-btn>
        </nuxt-link>
        <nuxt-link to="/noname">
          <v-btn flat dark>NONAME</v-btn>
        </nuxt-link>
        <nuxt-link to="/contact">
          <v-btn flat dark>CONTACT</v-btn>
        </nuxt-link>
        <v-spacer></v-spacer>
        <v-btn dark depressed large color="#5c85c9">
          <v-icon dark>search</v-icon>
        </v-btn>
      </v-layout>
    </div>
    <course-bar/>
    <v-container class="gl-v-container">
      <nuxt/>
    </v-container>
    <footer-container></footer-container>
  </v-layout>
</template>

<script>
import courseBar from '@/components/course-bar'
import footerContainer from '@/components/footer-container'

export default {
  components: {
    footerContainer
  }
}
</script>

<style lang="css">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  min-height: 100%;
}

a {
  text-decoration: none;
  color: white;
}

.gl-v-container {
  margin-top: -12rem;
}

.gl-toolbar {
  padding-top: 1.8rem;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 7rem;
  background-color: #1f74ff;
  color: rgb(255, 255, 255)
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
