export default {
  actions: {
    
  },

  mutations: {
    
  },

  state: {
    user: null
  },

  getters: {
    isAuth: ( state ) => !!state.user,
    isAdmin: ( state ) => state?.user?.role === 'admin'
  },
}