import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name='Bruce' heroName='Batman'><p>This is Children Props</p></Greet>
      <Greet name='Clark' heroName='Superman'/>
      <Greet name='Diana' heroName='Wonder Woman'/>
      <Welcome name='Clark' heroName='Superman'/>
      <Welcome name='Diana' heroName='Wonder Woman'/>

    </div>
  );
}



export default App;
