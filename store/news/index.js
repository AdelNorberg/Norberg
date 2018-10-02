const state = () => ({
  courseCrypt: []
})

const mutations = {
  addCourse: (state, data) => state.courseCrypt = data
}

const actions = {
  async getCourse ({ commit }) {
    try {
      let data = await this.$axios.get('https://api.coinmarketcap.com/v2/ticker/?limit=9')

      data = data.data.data
      data = _.map(data, (item) => {
        item.quotes['USD'].name = item.symbol
        return item.quotes['USD']
      })

      commit('addCourse', data)
    } catch (err) {
      console.log(err)
    }
  }
}

export default {
  namespaced: true,
  mutations,
  actions,
  state
};
