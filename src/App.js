import logo from './logo.svg';
import './App.css';
import {Dashboard} from './components/Dashboard';
import './assets/css/style.css'
import './assets/css/style.css.map'
import './assets/images/logo.svg'
import { Signup } from './components/Signup';
import { Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Dashboard/>
   
      

      <Routes>
        <Route path='/Form' element={<Signup/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
