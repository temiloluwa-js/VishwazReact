import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter/>
      <Greet name='Diana' heroName='Wonder Woman'/>
      <Message />
      <Welcome name='Bruce Wayne' heroName='Batman'/>
    </div>
  );
}

export default App;
