import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    musicPlaying: null
  },
  mutations: {
    setMusic(state, id){
      state.musicPlaying = id
    },
    // stopMusic(state, id){
    //   if(state.musicPlaying === id){
    //   console.log('stopping ', id)

    //     state.musicPlaying = null  
    //   }
    // }
  },
  actions: {
  },
  modules: {
  }
})
