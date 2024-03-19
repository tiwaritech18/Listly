import { useState } from "react";
import { useDispatch } from "react-redux";
import {addTodo} from "../features/todo/todoSlice"
import { IoIosAdd } from "react-icons/io";
import Container from "./Container"

const Input = () => {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState("");
  const [error, setError] = useState(false);
const handleValueChange = (e) => {
  setTodoValue(e.target.value);
  setError(false); 
}
const handleAddTodo = () => {
  if(!todoValue){
      setError(true)
      setTimeout(() => {
        setError(false); // Clear error message after 3 seconds
      }, 3000);
      return;
  }
    dispatch(addTodo(todoValue));
    setError(false)
    setTodoValue("")
}
  return (<Container>
    <div className="flex gap-3 items-center justify-center">
      <input type="text" className="py-2 px-12 rounded-full" placeholder="make goals to complete.." value={todoValue} name="text" onChange={handleValueChange} autoComplete="off" onClick={() => setError(false)} />
        <button className="font-bold border-pink-400 border-2 text-slate-600 rounded-full px-3 transition-all ease-in duration-300 hover:border-pink-600 hover:text-black flex items-center " onClick={handleAddTodo}>
          <IoIosAdd/>
          Add</button>
    </div>
    {error && <p className="text-center mt-3 text-sm">Task Cannot Be Empty🙃</p>}
  </Container>
  )
}

export default Input
