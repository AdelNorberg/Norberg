<template lang="html">
  <v-card>
    <v-img
      class="white--text"
      height="300px"
      src="https://cryptocurrencynews.com/wp-content/uploads/sites/3/2017/11/1200x630_CryptoCurrencyNews.png"
    >
      <v-container
        fill-height
        fluid
      >
        <v-layout fill-height>
          <v-flex
            xs12
            align-end
            flexbox
          >
            <span class="headline">Top 10 Australian beaches</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
  </v-card>
</template>

<script>
export default {
  layout: 'news',
  data () {
    return {
      item: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          header: [
            'lol',
            'thank',
            'drink',
            'pink'
          ],
          views: 125,
          tag: 'event'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.container
  height: 17rem
</style>
