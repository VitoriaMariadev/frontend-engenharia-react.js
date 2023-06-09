import Header from "../../Components/Header"
import {BiLeftArrow, BiRightArrow} from 'react-icons/bi'
import './style.css'
import { useRef } from 'react'

export const Portifolio = () => {

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
        <>
            <Header/>
            <main className="main-portifolio">

                <button className="btn left" onClick={irParaDireita}><BiLeftArrow/></button>
                <button className="btn right" onClick={irParaEsquerda}><BiRightArrow/></button>
                
                <div className="main-portifolio-carrossel" ref={carrousel}>

                    <div className="main-portifolio-carrossel-container">
                        <div className="main-portifolio-traco"></div>
                        <div className="main-portifolio-triangulo"></div>
                    </div>

                    <div className="main-portifolio-carrossel-container">
                        <div className="main-portifolio-traco"></div>
                        <div className="main-portifolio-triangulo"></div>
                    </div>

                    <div className="main-portifolio-carrossel-container">
                        <div className="main-portifolio-traco"></div>
                        <div className="main-portifolio-triangulo"></div>
                    </div>

                    <div className="main-portifolio-carrossel-container">
                        <div className="main-portifolio-traco"></div>
                        <div className="main-portifolio-triangulo"></div>
                    </div>

                </div>

                <div className="main-portifolio-pontos">

                <div className="main-portifolio-pontos-container">
                    <div className="main-portifolio-pontos-container-ponto1"></div>
                    <div className="main-portifolio-pontos-container-ponto2"></div>
                    <div className="main-portifolio-pontos-container-ponto3"></div>
                    <div className="main-portifolio-pontos-container-ponto4"></div>

                </div>

                </div>

            </main>

        </>
    )
}