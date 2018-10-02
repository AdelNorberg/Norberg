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
        v-for="(cryptoСurrency, index) in cryptoCurrencies"
        :key="index"
        dark
      >
        <v-btn flat>
          <div class="icon"/>
          ${{ cryptoСurrency.price }}
        </v-btn>
      </v-subheader>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      cryptoCurrencies: [
        {
          name: 'BTC',
          price: '6500',
          change: -1
        },
        {
          name: 'BTC',
          price: '6500',
          change: -1
        },
        {
          name: 'BTC',
          price: '6500',
          change: -1
        },
        {
          name: 'BTC',
          price: '6500',
          change: -1
        },
        {
          name: 'BTC',
          price: '6500',
          change: -1
        },
        {
          name: 'BTC',
          price: '6500',
          change: -1
        }
      ]
    }
  }
}
</script>
