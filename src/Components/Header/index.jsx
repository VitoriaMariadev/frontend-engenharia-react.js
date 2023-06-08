import './style.css'

export const Header = () => {
    return(
        <header>
            <div className="container">
                <div className="container-logo">
                    <div className="container-logo-img"></div>
                </div>

                <div className="container-informacoes">
                    <ul>
                        <li>Inicio</li>
                        <li>Projetos</li>
                        <li>Portifólio</li>
                        <li>Contato</li>
                    </ul>
                </div>

            </div>
        </header>
    )
}