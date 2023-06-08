import './style.css'

import { NavLink } from 'react-router-dom'


const Header = () => {
    return(
        <header>
            <div className="container-logo">
                <div className="container-logo-img"></div>
            </div>

            <div className="container-lista">
                <div className="container-lista-informacoes">
                    <NavLink to="/">Inicio</NavLink>
                    <NavLink to="/projetos">Projetos</NavLink>
                    <NavLink to="#">Portifólio</NavLink>
                    <NavLink to="#">Contato</NavLink>
                </div>

            </div>
            
        
        </header>
    )
}

export default Header