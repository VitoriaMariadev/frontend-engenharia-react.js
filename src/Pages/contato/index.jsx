import Header from '../../Components/Header'
import './style.css'
import {FaInstagramSquare, FaWhatsappSquare, FaLinkedin, FaFacebookSquare} from 'react-icons/fa'

export const Contato = () => {
    return(
        <>
            <Header/>
            <main className="main-contato">
                <div className="main-contato-logo">

                    <div className="main-contato-logo-img">
                        <div className='main-contato-logo-img-logo'></div>
                    </div>
                    <div className="main-contato-logo-redes">
                        <div className="main-contato-logo-redes-container">
                            <p>SIGA-NOS</p>

                            <div className="main-contato-logo-redes-container-logos">

                                <div className="main-contato-logo-redes-container-img">
                                    <a href=""><FaInstagramSquare/></a>
                                </div>

                                <div className="main-contato-logo-redes-container-img">
                                    <a href=""><FaFacebookSquare/></a>
                                </div>

                                <div className="main-contato-logo-redes-container-img">
                                    <a href=""><FaWhatsappSquare/></a>
                                </div>

                                <div className="main-contato-logo-redes-container-img">
                                    <a href=""><FaLinkedin/></a>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="main-contato-campos">
                    <div className="main-contato-campos-traco1"></div>
                    <div className="main-contato-campos-traco2"></div>
                    <h1>FORMULARIO DE CONTATO</h1>
                    <div className='main-contato-campos-nome'>
                        <div className="main-contato-campos-nome-input">

                            <p>NOME:</p>
                            <input type="text" />
                        </div>
                    </div>

                    <div className='main-contato-campos-email'>

                        <div className="main-contato-campos-email-input">
                            <p>EMAIL:</p>
                            <input type="text" />

                        </div>
                    </div>

                    <div className='main-contato-campos-descricao'>

                        <div className="main-contato-campos-descricao-input">
                            <p>DESCRIÇÃO:</p>
                            <textarea></textarea>

                        </div>
                    </div>

                    <div className="main-contato-campos-btn">
                        <button>ENVIAR</button>
                    </div>
                </div>
            </main>
        </>
    )
}