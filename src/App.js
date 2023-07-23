
import './App.css';
import UserRegistrationForm from './components/UserRegistrationForm/UserRegistrationForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
function App() {
  return (
    <div className="App">
    <UserRegistrationForm />
    <ToastContainer />
  </div>
  );
}

export default App;
