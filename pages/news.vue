<template lang="html">
  <v-layout row>
    <v-flex xs8>
      <v-layout row>
        <v-flex xs7>
          <carousel/>
        </v-flex>
        <v-flex xs3>
          <news-block/>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs4>
      <v-layout>
        <widget-soc/>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import carousel from '@/components/carousel'
import widgetSoc from '@/components/widgets/widget-soc'
import newsBlock from '@/components/news-block'

export default {
  layout: 'news',
  components: {
    carousel,
    widgetSoc,
    newsBlock
  },
  data () {
    return { }
  }
}
</script>

<style lang="css">
</style>
