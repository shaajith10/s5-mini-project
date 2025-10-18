import './App.css';
import Login from './auth/login';
import { Dashboard } from './dashboard';

function App() {
  const isLogin = localStorage.getItem('isLogin') ? true : false;
  return (
    !isLogin?<Login/>:<Dashboard/>
  );
}

export default App;
