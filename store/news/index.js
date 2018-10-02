const state = () => ({
  courseCript: []
})

const mutations = {
  addCourse: (state, data) => state.courseCript = data
}

const actions = {
  async getCourse ({ commit }) {
    try {
      const data = await this.$axios.get('https://api.exmo.com/v1/ticker/')
      commit('addCourse', data.data)
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
