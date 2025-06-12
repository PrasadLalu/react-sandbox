# React Redux
main.jsx
```
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/counterStore.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
)
```
counterStore.jsx
```
import { configureStore, createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    reset: state => {
      state.value = 0
    }
  }
})

export const { increment, decrement, reset } = counterSlice.actions

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})
```
counter.jsx
```
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../store/counterStore'

function Counter () {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.value)
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </>
  )
}

export default Counter
```
