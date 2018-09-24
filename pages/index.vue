<template>
  <v-container class="container">
    <v-layout justify-center>
      <v-flex xs12  sm3  md2>
        <component :is="componentBoard"></component>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs12  sm8  md8>
        <component :is="componentContent"></component>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import chart from '~/components/chart'
import statBoard from '~/components/stat-board'

export default {
  data () {
    return {
      nameContent: 'content-bargain',
      nameBoard: 'stat-board-auth'
    }
  },
  components: {
    chart,
    statBoard
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

<style scoped lang="sass">
.chart-container
</style>
