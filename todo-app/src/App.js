import './App.css';
import Button from './components/atoms';
import WelcomeTo from './components/molecules/WelcomeTo';
import Minimalist from './components/atoms/Minimalist';
import Toggle from './components/atoms/Toggle'

function App() {
  return (
    <div className="App">
      <Button />
      <WelcomeTo />
      <Minimalist />
      <Toggle />
    </div>
  );
}

export default App;
