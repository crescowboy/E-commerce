import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CatalogoPage from "./Pages/CatalogoPage";
import CarritoPage from "./Pages/CarritoPage";


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/catalogo' element={<CatalogoPage></CatalogoPage>}></Route>
      <Route path='/carrito' element={<CarritoPage></CarritoPage>}></Route>

    </Routes>
    
    </>
  );
}

export default App;
