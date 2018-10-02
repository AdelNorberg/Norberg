import Vuex from 'vuex'
import _ from 'lodash'

export const state = () => ({
  counter: 0
})

export const mutations = {
  increment (state) {
    state.counter++
  }
}
