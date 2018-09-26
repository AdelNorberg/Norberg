<template>
  <v-container class="container">
    <v-layout justify-center>
      <v-flex
        xs12
        sm3
        md2
      >
        <component :is="componentBoard"/>
      </v-flex>
      <v-spacer/>
      <v-flex
        xs12
        sm8
        md8
      >
        <component :is="componentContent"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import chart from '~/components/chart'
import statBoard from '~/components/stat-board'

export default {
  components: {
    chart,
    statBoard
  },
  data () {
    return {
      nameContent: 'content-bargain',
      nameBoard: 'stat-board-auth'
    }
  },
  computed: {
    componentBoard() {
      return () => import(`~/components/${this.nameBoard}`)
    },
    componentContent() {
      return () => import(`~/components/${this.nameContent}`)
    }
  }
}
</script>
