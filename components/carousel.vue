<template lang="html">
  <div>
    <v-carousel
      delimiter-icon
      hide-delimiters
      hide-controls
      interval="7000"
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      />
    </v-carousel>
  </div>
</template>

<script>
export default {
  layout: 'news',
  data () {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          header: 'Lol cheburek',
          views: 125,
          tag: 'news'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          header: 'Lol cheburek',
          views: 125,
          tag: 'news'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          header: 'Lol cheburek',
          views: 125,
          tag: 'news'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          header: 'Lol cheburek',
          views: 125,
          tag: 'news'
        }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
