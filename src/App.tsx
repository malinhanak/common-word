import "./App.css";
import Header from "./components/Header";
import { RootElement } from "./RootElements";

function App() {
  return (
    <RootElement>
      <div className="App">
        <Header />
      </div>
    </RootElement>
  );
}

export default App;
