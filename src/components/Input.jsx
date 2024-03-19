import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { IoIosAdd } from "react-icons/io";

const Input = () => {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState("");
  const [error, setError] = useState(false);

  const handleValueChange = (e) => {
    setTodoValue(e.target.value);
    setError(false);
  }

  const handleAddTodo = () => {
    if (!todoValue) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }

    dispatch(addTodo(todoValue));
    setTodoValue("");
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="flex items-center gap-3">
        <input
          type="text"
          className="py-2 px-3 w-[70%] rounded-full placeholder:text-sm"
          placeholder="Make goals to complete.."
          value={todoValue}
          onChange={handleValueChange}
          autoComplete="off"
          onClick={() => setError(false)}
        />
        <button
          className="font-bold border-pink-400 border-2 text-slate-600 rounded-full py-1 w-[30%] transition-all ease-in duration-300 hover:border-pink-600 hover:text-black flex items-center justify-center"
          onClick={handleAddTodo}
        >
          <IoIosAdd />
          Add
        </button>
      </div>
      {error && <p className="text-center text-sm text-red-500">Task cannot be empty</p>}
    </div>
  );
}

export default Input;
