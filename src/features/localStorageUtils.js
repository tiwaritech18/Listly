export const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos))
};

export const loadTodosFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("todos") || "[]")
}