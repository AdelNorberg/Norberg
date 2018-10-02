<template lang="html">
  <v-card
    flat
    color="#42444b"
  >
    <v-layout
      align-center
      justify-center
    >
      <v-subheader
        v-for="(item, index) in $store.state.news.courseCrypt"
        :key="index"
        dark
      >
        <v-btn flat>
          <img
            :src="'/cryptIcon/white/' + item.name.toLowerCase() + '.svg'"
            class="icon"
          >
          <div class="price">
            ${{ item.price.toFixed(3) }}
          </div>
          <v-icon
            v-if="item.percent_change_1h < 0 ? true : false"
            color="red"
            small
          >
            trending_down
          </v-icon>
          <v-icon
            v-else
            color="green"
            small
          >
            trending_up
          </v-icon>
        </v-btn>
      </v-subheader>
    </v-layout>
  </v-card>
</template>

<style lang="sass" scoped>
.price
  margin-right: 0.2rem
  margin-left: 0.2rem

.icon
  height: 1rem
</style>
