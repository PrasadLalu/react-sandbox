import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './counterStore'

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
