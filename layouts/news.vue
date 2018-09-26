<template>
  <div class="container-layout">
    <v-layout column>
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
            depressed
            large
            color="#5c85c9"
          >
            <v-icon dark>search</v-icon>
          </v-btn>
        </v-layout>
      </div>
      <course-bar/>
      <v-container class="gl-v-container">
        <nuxt/>
      </v-container>
      <footer-container/>
    </v-layout>
  </div>
</template>

<script>
import courseBar from '@/components/course-bar'
import footerContainer from '@/components/footer-container'

export default {
  components: {
    courseBar,
    footerContainer
  },
  data () {
    return {
      headers: [{
          name: 'HOME',
          path: '/'
        },
        {
          name: 'NEWS',
          path: '/news'
        },
        {
          name: 'NONAME',
          path: '/noname'
        },
        {
          name: 'CONTACT',
          path: '/contact'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.container-layout
  min-height: 100%

.gl-v-container

.gl-toolbar
  padding-top: 1.8rem
  padding-left: 1rem
  padding-right: 1rem
  height: 7rem
  background-color: #1f74ff
  color: rgb(255, 255, 255)
</style>
