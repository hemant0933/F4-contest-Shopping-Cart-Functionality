import store from './store/store';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';

function App() {
  return (
   <div>
     <Provider store={store}>
        <BrowserRouter>
              <Navbar/>
              <Routes>
                <Route exact path="/"  element={<Home/>} ></Route>
                <Route path="/cart" element={<Cart/>} ></Route>
              </Routes>
          </BrowserRouter>
     </Provider>
   </div>
  );
}

export default App;
