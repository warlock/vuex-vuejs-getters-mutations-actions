import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
    },
    updateAll (state, payload) {
      console.log(JSON.stringify(payload.users))
      state.users = payload.users
    }
  },
  actions: {
    add (context, payload) {
      context.commit('add', payload)
    },
    identificat (context) {
      console.log('executant accio')
      axios.get('http://localhost:3006/users')
      .then(res => {
        console.log('bu')
        console.log(JSON.stringify(res))
        context.commit('updateAll', res.data.rows)
      })
      .catch(err => {
        console.log('brrr')
        console.log(err)
      })
    }
  }
})
