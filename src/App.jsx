import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contato from './pages/Contato'
import Error from './pages/Error'
import Home from './pages/Home'
import Lancamento from "./pages/Lancamento";
import Layout from './pages/Layout'
import Liquidacao from "./pages/Liquidacao";
import Loja from './pages/Loja'
import Novidades from "./pages/Novidades";
import Sobre from "./pages/Sobre";
import Carrinho from "./pages/Carrinho";

function App() {
  return (
    <div>
      <h1>Bem vindo ao site!</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="loja" element={<Loja />} />
            <Route path="carrinho" element={<Carrinho />} />
            <Route path="novidades" element={<Novidades />} />
            <Route path="lancamento" element={<Lancamento />} />
            <Route path="liquidacao" element={<Liquidacao />} />
            <Route path="contato" element={<Contato />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
