import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Inicio from './Inicio'
import { Projetos } from './projetos'
import { Portifolio } from './portifolio'
import { SobreNos } from './sobre_nos'


const RotasExistente = props => (
    <main>
        <Routes>
            <Route  exact path="/" element={<Inicio/>}></Route>
            <Route  exact path="/projetos" element={<Projetos/>}></Route>
            <Route  exact path="/portifolio" element={<Portifolio/>}></Route>
            <Route  exact path="/sobre_nos" element={<SobreNos/>}></Route>
        </Routes>
    </main>
)

export default RotasExistente
