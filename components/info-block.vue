<template lang="html">
  <v-layout>
    <v-flex
      xs12
      sm6
      offset-sm3
    >
      <v-card>
        <v-img
          :src="record.src"
          class="white--text"
          height="12rem"
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
                <span class="headline">{{ record.title }}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span>{{ record.subtitle }}</span>
          </div>
        </v-card-title>
        <v-divider/>
        <v-card-actions>
          <v-layout>
            <v-icon small>turned_in_not</v-icon>
            <span class="grey--text">{{ record.tag }}</span>
            <v-spacer/>
            <v-icon small>date_range</v-icon>
            <span class="grey--text">{{ record.date }}</span>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    record: {
      type: Object,
      default: () => {
        return {
          src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          title: 'title title and title two',
          subtitle: 'subtitle laadf asdada asaemeioytr and asdasgqw asdahwads',
          tag: 'news',
          date: '00.00.50'
        }
      }
    }
  }
}
</script>

<style lang="css">
</style>
