import './App.css';
import Button from './components/atoms';
import WelcomeTo from './components/molecules/WelcomeTo';
import Minimalist from './components/atoms/Minimalist';

function App() {
  return (
    <div className="App">
      <Button />
      <WelcomeTo />
      <Minimalist />
    </div>
  );
}

export default App;
