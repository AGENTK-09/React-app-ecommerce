import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { HomeContextProvider } from './context/HomeContext';


function App() {
  return (
    <div className="App">
      <HomeContextProvider>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/cart' element={<Cart />}/>
          </Routes>
      </BrowserRouter>
      </HomeContextProvider>
    </div>
  );
}

export default App;
