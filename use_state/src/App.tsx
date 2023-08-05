import "./App.css";
import { AppStateProvider } from "./AppState";
import { ShowA } from "./components/ShowA";
import { ShowB } from "./components/ShowB";
import { Hello } from "./components/Hello";
import { NoProps } from "./components/NoProps";
import { Container } from "./components/Container";
import { HasProps } from "./components/HasProps";

function App() {
  return (
    <AppStateProvider>
      <h1>useContext + useState</h1>
      <ShowA />
      <Container>
        <ShowB />
        <NoProps />
        <HasProps name="hoge" />
      </Container>
      <Hello />
    </AppStateProvider>
  );
}

export default App;
