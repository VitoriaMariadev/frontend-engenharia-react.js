import Header from '../../Components/Header'
import './style.css'
import {BiLeftArrow, BiRightArrow} from 'react-icons/bi'
import { useRef } from 'react'

export const Projetos = () => {

    const carrousel = useRef(null)

    const irParaDireita = (e) => {
        e.preventDefault()
        carrousel.current.scrollLeft -= carrousel.current.offsetWidth

    }

    const irParaEsquerda = (e) => {
        e.preventDefault()
        carrousel.current.scrollLeft += carrousel.current.offsetWidth
    }

    return(

        <div>
            <Header/>
            <main className="main-projetos">

                <div className="main-container-listra">
                    <h3>
                        NOSSAS ESPECIALIDADES DE PROJETOS
                    </h3>
                </div>

                <div className="main-projetos-container">

                    <div className="main-projetos-container-divisao">
                        <div className="main-projetos-container-divisao-branco">
                            <div className="main-projetos-container-divisao-branco-img eletrica"></div>
                            <div className="main-projetos-container-divisao-branco-texto">
                                <h2 className='direita'>ELÉTRICOS</h2>
                                <p>Nossa empresa realiza projetos elétricos residenciais e prediais, fornecendo soluções personalizadas e eficientes para atender às necessidades dos clientes.</p>
                            </div>
                            <div className="main-projetos-container-divisao-branco-traco"></div>
                        </div>
                    </div>

                    <div className="main-projetos-container-divisao">
                        <div className="main-projetos-container-divisao-branco">
                            <div className="main-projetos-container-divisao-branco-traco"></div>
                                <div className="main-projetos-container-divisao-branco-texto">
                                    <h2 className='esquerda'>DADOS, VOZ E CFTV</h2>
                                    <p>soluções personalizadas para melhorar a infraestrutura de comunicação das empresas. Com experiência e tecnologia avançada, garantimos instalações seguras e de alta qualidade para redes de dados e voz.</p>
                                </div>
                            <div className="main-projetos-container-divisao-branco-img dados"></div>
                            
                        </div>
                    </div>

                    <div className="main-projetos-container-divisao">
                        <div className="main-projetos-container-divisao-branco">
                            <div className="main-projetos-container-divisao-branco-img hidrosanitario"></div>
                                <div className="main-projetos-container-divisao-branco-texto">
                                    <h2 className='direita'>HIDROSANITARIO</h2>
                                    <p>Nossa empresa é especializada em instalações hidrossanitárias, oferecendo soluções personalizadas para atender às necessidades de sistemas de água e esgoto. Com experiência e conhecimento técnico.</p>
                                </div>
                            <div className="main-projetos-container-divisao-branco-traco"></div>
                        </div>
                    </div>

                    <div className="main-projetos-container-divisao">
                        <div className="main-projetos-container-divisao-branco">
                            <div className="main-projetos-container-divisao-branco-traco"></div>
                                <div className="main-projetos-container-divisao-branco-texto">
                                    <h2 className='esquerda'>INCÊNDIO</h2>
                                    <p>soluções personalizadas para proteger edificações contra riscos de incêndio. Com expertise e conhecimento técnico, garantimos projetos detalhados e eficientes, contemplando sistemas de .detecção, alarme e extinção de incêndios.</p>
                                </div>
                            <div className="main-projetos-container-divisao-branco-img incendio"></div>
                        </div>
                    </div>

                    <div className="main-projetos-container-divisao">
                        <div className="main-projetos-container-divisao-branco">

                            <div className="main-projetos-container-divisao-branco-img gas"></div>
                                <div className="main-projetos-container-divisao-branco-texto">
                                    <h2 className='direita'>GÁS</h2>
                                    <p>Nossa empresa é especializada em projetos de gás, oferecendo soluções personalizadas para instalações de sistemas de gás seguros e eficientes.</p>
                                </div>
                            <div className="main-projetos-container-divisao-branco-traco"></div>           
                        </div>
                    </div>

                    <div className="main-projetos-container-divisao">
                        <div className="main-projetos-container-divisao-branco">
                            <div className="main-projetos-container-divisao-branco-traco"></div>
                                <div className="main-projetos-container-divisao-branco-texto">
                                    <h2 className='esquerda'>SPDA</h2>
                                    <p>Nossa empresa é especializada em projetos de SPDA (Sistema de Proteção contra Descargas Atmosféricas), oferecendo soluções personalizadas para proteger edificações contra raios.</p>
                                </div>
                            <div className="main-projetos-container-divisao-branco-img spda"></div>
                        </div>
                    </div>


                </div>

            </main>
        </div>
    )
}