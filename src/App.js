import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckOut from './Pages/CheckOut/CheckOut';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import PhotographerDetail from './Pages/PhotographerDetail/PhotographerDetail';
import Header from './Pages/Shared/Header/Header';



function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}/>
        <Route path='/photographer/:photographerId' element={<PhotographerDetail/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
