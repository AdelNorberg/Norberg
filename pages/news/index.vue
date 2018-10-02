<template lang="html">
  <v-layout
    row
    wrap
  >
    <v-flex xs9>
      <v-layout
        row
        align-center
        justify-center
        wrap
      >
        <v-flex
          mx-5
          xs12
          sm8
          md8
          lg8
          xl8
        >
          <event-block/>
        </v-flex>
        <v-flex
          v-for="(item, i) in dataInfoBlock"
          :key="i"
          mt-3
          ml-3
          xs12
          sm6
          md5
          lg4
          xl3
        >
          <info-block :record="item"/>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs3>
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
    return {
      dataInfoBlock: [
        {
          src: 'https://i-invdn-com.akamaized.net/content/pic4f4f55f1af7244aef1b2facffd5fc7be.jpg',
          title: 'title title and title twosada',
          subtitle: 'subtitle laadf asdada asaemeioytr and asdasgqw asdahwads',
          tag: 'news',
          date: '00.00.50'
        },
        {
          src: 'https://i-invdn-com.akamaized.net/content/pic0dfc611d6848ab0fd42f01dcf7fad251.jpg',
          title: 'title title and title two',
          subtitle: 'subtitle laadf asdada asaemeioytr and asdasgqw asdahwads',
          tag: 'news',
          date: '00.00.50'
        },
        {
          src: 'https://i-invdn-com.akamaized.net/content/pice5009555392dc6c1c6533c88f37ab864.jpg',
          title: 'title title and title two',
          subtitle: 'subtitle laadf asdada asaemeioytr and asdasgqw asdahwads',
          tag: 'news',
          date: '00.00.50'
        },
        {
          src: 'https://i-invdn-com.akamaized.net/akapi-images/1aba910f8a23b3b3da37221b73b2fc50.jpg',
          title: 'title title and title two',
          subtitle: 'subtitle laadf asdada asaemeioytr and asdasgqw asdahwads',
          tag: 'news',
          date: '00.00.50'
        },
        {
          src: 'https://i-invdn-com.akamaized.net/content/pic11ce4c1f37548f356120a8f0a98f441e.jpg',
          title: 'title title and title two',
          subtitle: 'subtitle laadf asdada asaemeioytr and asdasgqw asdahwads',
          tag: 'news',
          date: '00.00.50'
        },
        {
          src: 'https://i-invdn-com.akamaized.net/content/picef90e146fb3bcc6a7dd324804b45f0d1.jpg',
          title: 'title title and title two',
          subtitle: 'subtitle laadf asdada asaemeioytr and asdasgqw asdahwads',
          tag: 'news',
          date: '00.00.50'
        }
      ]
    }
  },
  mounted () {
    this.$store.dispatch('news/getCourse')
  }
}
</script>

<style lang="css">
</style>
