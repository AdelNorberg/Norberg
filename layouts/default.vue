<template>
  <div>
    <div class="gl-toolbar">
      <v-layout align-center>
        <nuxt-link to="/landing">
          <v-toolbar-title class="display-1">Norberg</v-toolbar-title>
        </nuxt-link>
        <v-spacer/>
        <nuxt-link to="/news">
          <v-btn
            flat
            dark>
            NEWS
          </v-btn>
        </nuxt-link>
        <nuxt-link to="/">
          <v-btn
            flat
            dark>
            HOME
          </v-btn>
        </nuxt-link>
        <nuxt-link to="/about">
          <v-btn
            flat
            dark>
            ABOUT
          </v-btn>
        </nuxt-link>
        <nuxt-link to="/problem">
          <v-btn
            flat
            dark>
            PROBLEM
          </v-btn>
        </nuxt-link>
        <v-spacer/>
        <v-btn
          dark
          depressed
          large
          color="#5c85c9">
          <v-icon dark>search</v-icon>
        </v-btn>
      </v-layout>
    </div>
    <v-container class="gl-v-container">
      <nuxt/>
    </v-container>
    <footer-container/>
  </div>
</template>

<script>
import footerContainer from '@/components/footer-container'

export default {
  components: {
    footerContainer
  }
}
</script>

<style>
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
  height: 25rem;
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
