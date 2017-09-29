import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundView = () => (
  <div className="container text--center viewSpacer--large">
    <h1 className="display-1 font--weight-bold">Página não encontrada</h1>
    <h3 className="display-5">
      Não conseguimos encontrar essa página.
    </h3>
    <h4 className="text--muted-dark mt-4">
      <b>Código:</b> 404
    </h4>
    <ul className="nav nav--vertical font--size-large mt-4">
      <li className="nav__item nav__link">
        <Link to="/">Início</Link>
      </li>
    </ul>
  </div>
)

NotFoundView.displayName = 'NotFoundView'

export default NotFoundView
