// import logo from './logo.svg';
import './App.css';
import Navigator from './components/navigator/Navigator'
import {ToastContainer} from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Navigator/>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
