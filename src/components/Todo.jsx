import TodoList from "./TodoList"
import Input from "./Input";
import Footer from "./Footer";
import RandomQuote from "./RandomQuote";

const Todo = () => {



  return (
    <div className="border h-svh flex items-center justify-center">
      <div className="glass-container h-full px-10 rounded-xl">
        <header className="flex flex-col ">
          <RandomQuote/>
          <h1 className="text-2xl mb-6 text-center font-bold font-mono ">Listl<span className="font-extralight ">y.</span></h1>
        </header>
        <Input/>
        <TodoList />
        <Footer/>
      </div>
    </div>
  )
}

export default Todo
