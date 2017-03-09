const createStore = require('melcore').createStore

const reducers = []

const store = createStore(reducers)

store.wrapDispatch(function (dispatch, action, payload) {
  dispatch(action, payload)
})

module.exports = store
