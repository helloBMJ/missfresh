import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import fruitList from "./FruitList"
import mycar from "./myCar"
export default new Vuex.Store({
  modules:{
    fruitList,mycar
  }
})
