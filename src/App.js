import './App.css';
import Counter from './components/Counter';
import FunctionEvent from './components/FunctionEvent';
import Message from './components/Message';
//import Profile from './components/Profile';
function App() {
  return (
    <div className="App">
      {/* <Profile name="neokyuubi">
        <b>Super</b>
      </Profile> */}
      <Message messageMe="hellooooooo" />
      <Counter />
      <FunctionEvent name="Neo" />
    </div>
  );
}

export default App;
