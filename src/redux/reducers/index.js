import { combineReducers } from 'redux'
import models from './models.reducer'
import faker from './faker.reducer'
import prop from './prop.reducer'

export default combineReducers({ models, faker, prop })
