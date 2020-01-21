import React from 'react';
import Inicio from '../Inicio';
import Empresa from '../Empresa';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const Menu = () => (
  <Router>
    <div className="mt-4">
      <ul className="nav text-center">
          <li className="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/empresa">Empresa</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/users">Serviços</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/users">Peças</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/users">Motores</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/users">Loja</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/users">Contato</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/app">Baixar APP</Link>
          </li>
        </ul>
        <Route>
          <Switch>
            <Route path="/">
              <Inicio />
            </Route>
            <Route path="/empresa">
              <Empresa />
            </Route>
          </Switch>
        </Route>
      </div>  
    </Router> 
);


export default Menu;