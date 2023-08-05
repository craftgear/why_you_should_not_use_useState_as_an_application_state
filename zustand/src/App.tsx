import "./App.css";
import { ShowA } from "./components/ShowA";
import { ShowB } from "./components/ShowB";
import { Hello } from "./components/Hello";
import { Container } from "./components/Container";
import { NoProps } from "./components/NoProps";

function App() {
  return (
    <>
      <h1>Zustand</h1>
      <ShowA />
      <Container>
        <ShowB />
        <NoProps />
      </Container>
      <Hello />
    </>
  );
}

export default App;
