import { useDispatch, useSelector } from "react-redux"
import { clearTodo } from "../features/todo/todoSlice"

const Footer = () => {
  const dispatch = useDispatch()
  const selector = useSelector((store) => store.todo.todoList);


    if(selector.length < 1){
      return <>
      <h1 className="text-center font-bold text-lg ">Start Fresh: Add Your First Task!📜</h1>
      <div className="flex justify-center items-center">
        <p className="fixed bottom-10 text-center z-10 " >made with love❤️ by Rohit</p>
      </div>
      </>
    }else{
      return <>
      <footer className="text-center mt-5">
      <button className="py-1 px-4 border-red-500 border rounded-lg  hover:bg-red-800 hover:text-white transition-all duration-300 ease-in" onClick={() => dispatch(clearTodo())}>Clear todos</button>
      </footer>
      <div className="flex justify-center items-center">
        <p className="fixed bottom-10 text-center " >made with love ❤️ </p>
      </div>
      </> 
    }
  }

export default Footer
