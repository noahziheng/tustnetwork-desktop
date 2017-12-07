const state = {
  connected: false
}

const mutations = {
  CONNECT (state) {
    state.connected = true
  },
  DISCONNECT (state) {
    state.connected = false
  },
  SETCONNECTED (state, n) {
    state.connected = n
  }
}

const actions = {
  toggleConnect ({ commit }, { value, tustnet }) {
    if (value) {
      tustnet.connect().then(r => {
        commit('CONNECT')
      }).catch(err => {
        console.error(err)
      })
    } else {
      tustnet.logout().then(r => {
        commit('DISCONNECT')
      }).catch(err => {
        console.error(err)
      })
    }
  }
}

export default {
  state,
  mutations,
  actions
}
