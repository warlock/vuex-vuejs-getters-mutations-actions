import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    users: [
      { id: 1, name: 'Eudald', registered: false },
      { id: 2, name: 'Jordi', registered: false },
      { id: 3, name: 'Josep', registered: false },
      { id: 4, name: 'Simon', registered: false }
    ],
    registrations: []
  },
  getters: {
    getUsers: state => {
      return state.users
    },
    getUser: state => {
      return state.users.filter(user => user.id === 1)
    }
  },
  mutations: {
    add (state, payload) {
      state.users.push(payload.user)
    }
  },
  actions: {
    add (context, payload) {
      context.commit('add', payload)
    }
  }
})
