import { combineReducers } from 'redux'

import user from './user/select'
import date from './Date/selected'
import person from './persons/list'
import mascotas from "./Mascotas/list"

export default combineReducers({ user, date, person, mascotas })
