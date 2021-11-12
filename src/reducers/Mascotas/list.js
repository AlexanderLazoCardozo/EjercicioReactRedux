import { combineReducers } from 'redux'
import { MASCO_ERROR, MASCO_LIST, MASCO_LOADING } from '../../actions/Mascotas/list'



const error2 = (state = null, action) => {
  switch (action.type) {
    case MASCO_ERROR:
      return action.error
    default:
      return state
  }
}

const loading2 = (state = false, action) => {
  switch (action.type) {
    case MASCO_LOADING:
      return action.loading
    default:
      return state
  }
}

const data2 = (state = [], action) => {
  switch (action.type) {
    case MASCO_LIST:
      return action.data
    default:
      return state
  }
}



export default combineReducers({ error2, loading2, data2 })