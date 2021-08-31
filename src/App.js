import logo from './logo.svg';
import './App.css';
import CountDownTimer from "./countdown-timer";
import Quiz from "./quiz";
import ToDoApp from "./todo";
import PasswordGenerator from "./password-gen";
import DrawingApp from "./drawingApp"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <CountDownTimer /> */}
        {/* <Quiz /> */}
        <ToDoApp />
        {/* <PasswordGenerator /> */}
        {/* <DrawingApp /> */}
      </header>
    </div>
  );
}

export default App;
