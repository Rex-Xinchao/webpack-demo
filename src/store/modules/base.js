import Vue from 'vue'

const base = {
  state: {
    userName: 'RexSun',
  },
  getters: {
    userName: state => {
      console.log(state)
      return state.userName
    }
  },
  mutations: {},
  actions: {
    setUser (store, userName) {
      store.state.userName = userName
    }
  }
}

export default base
