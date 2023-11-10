import './App.css'
import  {Routes, Route} from 'react-router-dom';
import Login from './Pages/Login';
import { Dashboard } from './Pages/Dashboard';
import SignUp from './Pages/SignUp';
import { Products } from './Pages/Products';
import { Profiles } from './Pages/Profiles';
import { Settings } from './Pages/Settings';
import { Restaurants } from './Pages/Restaurants';
import { Info } from './Pages/Info';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/Login' element={<Login />}/>
      <Route path='/Dashboard' element={<Dashboard />}/>
      <Route path='/SignUp' element={<SignUp />}/>
      <Route path='/Products' element={<Products />}/>
      <Route path='/Profiles' element={<Profiles />}/>
      <Route path='/Settings' element={<Settings />}/>
      <Route path='/Restaurants' element={<Restaurants/>}/>
      <Route path='/Info' element={<Info />}/>
    </Routes>
  )
}

export default App
