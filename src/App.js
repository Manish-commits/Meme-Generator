import './App.css';
import Header from './Components/Header';
import LoginForm from './Components/LoginForm';
import Meme from './Components/Meme';

function App() {
  return (
    <div className="App">
      <Header />
      <Meme />
      <hr />
      <LoginForm />
    </div>
  );
}

export default App;
