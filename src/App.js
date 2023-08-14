import './App.css';
import ClassEvent from './components/ClassEvent';
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
      <ClassEvent name="Kyuubi" />
    </div>
  );
}

export default App;
