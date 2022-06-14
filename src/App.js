import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import Producto from './pages/Producto';
import Hombre from './pages/Hombre';
import Mujer from './pages/Mujer';
import Ofertas from './pages/Ofertas';
import Marca from './pages/Marca';
import Carrito from './pages/Carrito';
import Buscar from './pages/Buscar';
import CarritoProvider from './context/CarritoContext';
import ScrollToTop from './hooks/ScrollToTop';
import Checkout from './pages/Checkout';
import Footer from './components/Footer';

function App() {
  return (
    <CarritoProvider>
      <BrowserRouter>
        <Header/>
        <ScrollToTop/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/carrito" element={<Carrito/>} />
          <Route exact path="/hombre" element={<Hombre/>} />
          <Route exact path="/mujer" element={<Mujer/>} />
          <Route exact path="/ofertas" element={<Ofertas/>} />
          <Route exact path="/marca/:marcaId" element={<Marca/>} />
          <Route exact path="/producto/:id" element={<Producto/>} />
          <Route exact path="/checkout" element={<Checkout/>} />
          <Route path="/search" element={<Buscar/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CarritoProvider>
  );
}

export default App;
