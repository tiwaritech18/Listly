import { createSlice } from "@reduxjs/toolkit";
import { saveTodosToLocalStorage, loadTodosFromLocalStorage } from "../localStorageUtils";

const initialState = {
  todoList: loadTodosFromLocalStorage(),
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    clearTodo: (state) => {
      state.todoList = [];
      saveTodosToLocalStorage(state.todoList);
    },
    addTodo: (state, action) => {
      const randomId = Math.random();
      state.todoList.push({
        id: randomId,
        text: action.payload,
        completed: false,
      });
      saveTodosToLocalStorage(state.todoList);
    },
    removeTodo: (state, action) => {
      const todoId = action.payload;
      state.todoList = state.todoList.filter((todo) => todo.id !== todoId);
      saveTodosToLocalStorage(state.todoList);
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todoToEdit = state.todoList.find(todo => todo.id === id);
      if (todoToEdit) {
        todoToEdit.text = text;
        saveTodosToLocalStorage(state.todoList);
      }
    },
    markAsCompleted: (state, action) => {
      const id = action.payload;
      const todoToMark = state.todoList.find(todo => todo.id === id);
      if (todoToMark) {
        todoToMark.completed = !todoToMark.completed;
        saveTodosToLocalStorage(state.todoList);
      }
    }
  },
});

export const { clearTodo, removeTodo, addTodo, editTodo, markAsCompleted } = todoSlice.actions;
export default todoSlice.reducer;
