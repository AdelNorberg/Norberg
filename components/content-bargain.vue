<template lang="html">
  <v-card
    height="40rem"
    active-class="default-class chart-container">
    <v-tabs fixed-tabs>
      <v-tab
        v-for="n in 3"
        :key="n"
      >
        Item {{ n }}
      </v-tab>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
