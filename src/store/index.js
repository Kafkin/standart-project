import { createStore } from 'vuex'

// render server-error
import error from './modules/error.js'

// test user module
import user from './modules/user.js'

export default createStore({
  modules: {
    error, user
  }
})
