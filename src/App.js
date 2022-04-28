import "./App.css";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Message from "./components/Message";
// import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";

function App() {
  return (
    <div className="App">
      {/* <Counter/>
      <Greet name='Diana' heroName='Wonder Woman'/>
      <Message />
      <Welcome name='Bruce Wayne' heroName='Batman'/> */}
      <EventBind/>
      {/* <FunctionClick/>
      <ClassClick/> */}
    </div>
  );
}

export default App;
