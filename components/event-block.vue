<template lang="html">
  <v-layout>
    <v-flex
      xs12
      sm6
      offset-sm3
    >
      <v-card>
        <v-img
          class="white--text"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
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
    </v-flex>
  </v-layout>
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
