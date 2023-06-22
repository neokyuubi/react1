import './App.css';
import Message from './components/Message';
import Profile from './components/Profile';
function App() {
  return (
    <div className="App">
      {/* <Profile name="neokyuubi">
        <b>Super</b>
      </Profile> */}
      <Message messageMe="hellooooooo" />
    </div>
  );
}

export default App;
