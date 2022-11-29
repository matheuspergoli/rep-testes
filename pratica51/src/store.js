import counter from './counter'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const reducer = combineReducers({ counter })

const store = configureStore({ reducer })

export default store
