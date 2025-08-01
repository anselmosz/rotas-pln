import { Outlet, Link } from "react-router-dom";

export default function Layout(){
  return(
    <div>
      <nav>
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/loja">Loja</Link>
          </li>
          <li>
            <Link to="/carrinho">Carrinho</Link>
          </li>
          <li>
            <Link to="/novidades">Novidades</Link>
          </li>
          <li>
            <Link to="/liquidacao">Liquidação</Link>
          </li>
          <li>
            <Link to="/Lancamento">lançamento</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
          <li>
            <Link to="/Sobre">Sobre nós</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}