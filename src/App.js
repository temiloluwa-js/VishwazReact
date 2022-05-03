import "./App.css";
import Hero from "./components/Hero";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div className="App">

      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
      <Hero heroName='Bruce'/>
    </div>
  );
}

export default App;
