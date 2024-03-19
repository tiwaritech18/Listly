import Todo from "./components/Todo";
import "./App.css";
import Container from "./components/Container"

const App = () => {
  return (
    <Container>
      <main className="h-svh flex justify-center items-center">
        <Todo />
      </main>
    </Container>
  );
};

export default App;
