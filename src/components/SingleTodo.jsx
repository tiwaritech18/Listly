import deleteImg from "../images/delete.png";
import penImg from "../images/pen.png";
import { useDispatch } from "react-redux";
import {
  removeTodo,
  editTodo,
  markAsCompleted,
} from "../features/todo/todoSlice";
import { useState } from "react";
import { IoIosCheckmark } from "react-icons/io";

const SingleTodo = ({ id, text, completed }) => {
  const [inputField, setInputField] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  function handleEditTodo() {
    setInputField(true);
  }

  function handleSubmitTodo() {
    if (!inputValue) {
      setError(true);
    } else {
      dispatch(editTodo({ id: id, text: inputValue }));
      setInputField(false);
      setError(false);
    }
  }
  return (
    <>
      {inputField ? (
        <div className="overlay absolute inset-0 bg-black opacity-70"></div>
      ) : null}
      <div className="flex justify-between w-full border p-2 mt-4 rounded-lg items-center">
        <div className="flex gap-3">
          <div className="" onClick={() => dispatch(markAsCompleted(id))}>
            <IoIosCheckmark
              className={`text-3xl text-slate-500 border-slate-500 border rounded-full ${
                completed === true ? "bg-black text-white" : ""
              }`}
            />
          </div>
          <span
            className={`font-semibold text-lg ${
              completed === true ? "line-through" : ""
            }`}
          >
            {text}
          </span>
        </div>

        <div className="flex gap-3 relative">
          <img
            src={deleteImg}
            alt="delete icon"
            onClick={() => dispatch(removeTodo(id))}
            className="w-4 object-contain"
          />
          {completed === false && (
            <img
              src={penImg}
              alt="edit icon"
              className="w-4 object-contain"
              onClick={handleEditTodo}
            />
          )}
          {inputField ? (
            <>
              <div className="input-field fixed left-10 w-60 h-fit py-3 bg-white rounded-xl flex flex-col justify-items-start items-start px-4 z-20">
                {error && (
                  <p className="text-red-300 text-center">
                    task cannot be empty🙃
                  </p>
                )}
                <input
                  type="text"
                  className="px-2 py-1 mt-3 rounded-sm border-black outline outline-1 outline-pink-400"
                  placeholder={text}
                  onChange={(e) => setInputValue(e.target.value)}
                  value={inputValue}
                />
                <button
                  className="text-white bg-pink-500 mt-3 px-3 py-1 rounded-lg hover:bg-pink-700"
                  onClick={handleSubmitTodo}
                >
                  Save
                </button>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default SingleTodo;
