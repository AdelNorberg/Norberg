<template>
  <div>
    <div class="gl-toolbar">
      <v-layout align-center>
        <nuxt-link to="/landing">
          <v-toolbar-title class="display-1">Norberg</v-toolbar-title>
        </nuxt-link>
        <v-spacer/>
        <nuxt-link
          v-for="(header, i) in headers"
          :key="i"
          :to="header.path"
        >
          <v-btn
            flat
            dark
          >
            {{ header.name }}
          </v-btn>
        </nuxt-link>
        <v-spacer/>
        <v-btn
          dark
          icon
          large
          color="#558ae2"
        >
          <v-icon dark>account_circle</v-icon>
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
  },
  data () {
    return {
      headers: [{
          name: 'NEWS',
          path: '/news'
        },
        {
          name: 'HOME',
          path: '/'
        },
        {
          name: 'ABOUT',
          path: '/about'
        },
        {
          name: 'PROBLEM',
          path: '/problem'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.gl-v-container
  margin-top: -12rem

.gl-toolbar
  padding-top: 1.8rem
  padding-left: 1rem
  padding-right: 1rem
  height: 25rem
  background-color: #1f74ff
  color: rgb(255, 255, 255)
</style>
