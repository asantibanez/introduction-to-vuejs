
require('./../build.css')

import Vue from 'vue'
import App from './components/App.vue'
import ComposeTweet from './components/ComposeTweet.vue'
import StarWarsCharacters from './components/StarWarsCharacters'

Vue.component('app', App)
Vue.component('compose-tweet', ComposeTweet)
Vue.component('star-wars-characters', StarWarsCharacters)

new Vue().$mount('app')
