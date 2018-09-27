<template lang="html">
  <v-layout row>
    <v-flex xs8>
      <v-layout
        row
        wrap
      >
        <v-flex xs12>
          <event-block/>
        </v-flex>
        <v-flex xs6>
          <info-block/>
        </v-flex>
        <v-flex xs6>
          <info-block/>
        </v-flex>
        <v-flex xs6>
          <info-block/>
        </v-flex>
        <v-flex xs6>
          <info-block/>
        </v-flex>
        <v-flex xs6>
          <info-block/>
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
import eventBlock from '@/components/event-block'
import widgetSoc from '@/components/widgets/widget-soc'
import infoBlock from '@/components/info-block'

export default {
  layout: 'news',
  components: {
    eventBlock,
    widgetSoc,
    infoBlock
  },
  data () {
    return { }
  }
}
</script>

<style lang="css">
</style>
