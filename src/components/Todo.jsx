import TodoList from "./TodoList"
import Input from "./Input";
import Footer from "./Footer";
import RandomQuote from "./RandomQuote";

const Todo = () => {



  return (
    <div className=" h-svh flex items-center justify-center">
      <div className="min-h-[700px]  glass-container px-10 rounded-xl">
        <header className="flex flex-col">
          <RandomQuote/>
          <h1 className="text-2xl mb-6 text-center font-extralight">task<span className="font-bold ">Quest.</span></h1>
        </header>
        <Input/>
        <TodoList />
        <Footer/>
      </div>
    </div>
  )
}

export default Todo
