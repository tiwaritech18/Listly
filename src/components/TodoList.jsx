import { useSelector } from "react-redux"
import SingleTodo from "./SingleTodo";


const TodoList = () => {
  const todoList = useSelector((store) => store.todo.todoList);

  

  return (
    <div className="todo mt-9">
          {todoList.map((todo) => {
            return (
              <SingleTodo key={todo.id} {...todo}></SingleTodo>
            )
          })}
        </div>
  )
}

export default TodoList
