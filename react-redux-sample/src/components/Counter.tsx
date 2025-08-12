import { decreament, increament, reset } from "../features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

const Counter = () => {
    const dispatch = useAppDispatch();
    const count = useAppSelector(state => state.counter.value)
    return (
        <>
            <h2>Counter: { count }</h2>
            <button onClick={() => dispatch(increament())}>Increament</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(decreament())}>Decreament</button>
        </>
    )
}

export default Counter;
