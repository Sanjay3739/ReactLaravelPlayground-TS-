import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Pages/home';
import Create from './Pages/create';
import Edit from './Pages/edit';
import Show from './Pages/view';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/create' element={<Create />} />
    <Route path='/edit/:id' element={<Edit />} />
    <Route path='/show/:id' element={<Show />} />
   
  </Routes>
  );
}

export default App;
