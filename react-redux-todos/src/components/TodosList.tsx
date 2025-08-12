import { removeTodoItem } from "../features/todos/todoSlice"
import { useAppDispatch, useAppSelector } from "../hooks"

const TodosList = () => {
    const dispatch = useAppDispatch()
    const todos = useAppSelector(state => state.todos.items)

    const deleteTodo = (id: string) => {
        dispatch(removeTodoItem(id))
    }
    return (
        <>
            {todos.map(todo => (<li key={todo.id}>
                {todo.text}
                <span>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </span>
            </li>))}
        </>
    )
}

export default TodosList
