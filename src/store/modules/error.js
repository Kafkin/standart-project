// use this structure to catch errors -> if( res?.error ) { commit( 'setError', res.error ); return; }

export default {
  mutations: {
    setError: ( state, newErrors ) => {
      state.errors = Object.values( newErrors.message )
      state.code = newErrors.code
    }
  },

  state: {
    errors: [],
    code: 200
  },

  getters: {
    getGroupError: ( state ) => ({ errors: state.errors.flat( 1 ), color: state.code > 201 ? 'red' : 'green' }),
  }
}