import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CatalogoPage from "./Pages/CatalogoPage";
import CarritoPage from "./Pages/CarritoPage";
import PagoPage from "./Pages/PagoPage";
import Provider from "./Context/Provider";
import ProductCard from "./Pages/ProductCard";
import DetalleProductoPage from "./Pages/DetalleProductoPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";


function App() {
  return (
    <>
    <Provider>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/catalogo' element={<CatalogoPage></CatalogoPage>}></Route>
      <Route path='/carrito' element={<CarritoPage></CarritoPage>}></Route>
      <Route path='/pago' element={<PagoPage></PagoPage>}></Route>
      <Route path='detalleProducto' element={<DetalleProductoPage></DetalleProductoPage>}></Route>
      <Route path='/login' element={<LoginPage></LoginPage>}></Route>
      <Route path='/signUp' element={<SignUpPage></SignUpPage>}></Route>
    </Routes>
    </Provider>
    </>
  );
}

export default App;
