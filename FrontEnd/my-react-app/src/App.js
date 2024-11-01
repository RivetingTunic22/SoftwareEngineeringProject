import './App.css';
import {
  BrowserRouter,
  Route,
  Routes} from 'react-router-dom';
import Landing from './components/Landing';
import SignIn from './components/SignIn';
import Menu from './components/Menu';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
