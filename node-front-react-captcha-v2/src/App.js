import logo from './logo.svg';
import './App.css';
import { FormComponent } from './components/FormComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>Prueba de formulario simple con ReCAPTCHA v2</p>
        <FormComponent />
      </header>
    </div>
  );
}

export default App;
