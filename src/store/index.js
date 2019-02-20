import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    movies: ['Avengers', 'Alita', {title: 'Friendzone', photoURL: 'https://imgcache.joox.com/music/joox/photo_th_th/toplist_300/a/c/950af635b784d9873852c703254fa7ac.jpg'}]
  }
})
