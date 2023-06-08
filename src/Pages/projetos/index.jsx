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

        <>
            <Header/>
            <main className="main-projetos">

                <button className='btn left' onClick={irParaDireita}><BiLeftArrow/></button>
                <button className='btn right' onClick={irParaEsquerda}><BiRightArrow/></button>

                <div className="main-projetos-cards" ref={carrousel}>

                    <div className="main-projetos-cards-container">

                        <div className="main-projetos-cards-card-container-card"></div>

                    </div>

                    <div className="main-projetos-cards-container">

                        <div className="main-projetos-cards-card-container-card"></div>

                    </div>

                    <div className="main-projetos-cards-container">

                        <div className="main-projetos-cards-card-container-card"></div>

                    </div>

                    <div className="main-projetos-cards-container">

                        <div className="main-projetos-cards-card-container-card"></div>

                    </div>

                    <div className="main-projetos-cards-container">

                        <div className="main-projetos-cards-card-container-card"></div>

                    </div>

                    <div className="main-projetos-cards-container">

                        <div className="main-projetos-cards-card-container-card"></div>

                    </div>

                    <div className="main-projetos-cards-container">

                        <div className="main-projetos-cards-card-container-card"></div>

                    </div>

                    <div className="main-projetos-cards-container">

                        <div className="main-projetos-cards-card-container-card"></div>

                    </div>

                    <div className="main-projetos-cards-container">

                        <div className="main-projetos-cards-card-container-card"></div>

                    </div>

                    <div className="main-projetos-cards-container">

                        <div className="main-projetos-cards-card-container-card"></div>

                    </div>

                    <div className="main-projetos-cards-container">

                        <div className="main-projetos-cards-card-container-card"></div>

                    </div>

                </div>

            </main>
        </>
    )
}