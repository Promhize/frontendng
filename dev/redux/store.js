import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import persistState from 'redux-localstorage'
import rootReducer from 'redux/rootReducer'

const enhancer = compose(applyMiddleware(thunk), persistState(['auth', 'user_type']))

const store = createStore(
  rootReducer,
  {},
  enhancer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store
