import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialCounterState = { counter: 0, show: true }
const initialAuthState = { isLogin: false }

const AuthSlice = createSlice({
  name: 'Auth',
  initialState: initialAuthState,
  reducers: {
    loggedIn(state) {
      state.isLogin = true
    },
    loggedOut(state) {
      state.isLogin = false
    },
  },
})

const counterSlice = createSlice({
  name: 'counterManager',
  initialState: initialCounterState,
  reducers: {
    toogle(state) {
      state.show = !state.show
    },
    inc(state) {
      state.counter++
    },
    dec(state) {
      state.counter--
    },
    increaseBy(state, action) {
      state.counter = state.counter + action.payload
    },
  },
})

const Store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: AuthSlice.reducer },
})
export const actionsCounter = counterSlice.actions
export const actionsAth = AuthSlice.actions

export default Store
