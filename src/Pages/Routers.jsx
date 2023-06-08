import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Inicio from './inicio'
import { Projetos } from './projetos'


const RotasExistente = props => (
    <main>
        <Routes>
            <Route  exact path="/" element={<Inicio/>}></Route>
            <Route  exact path="/projetos" element={<Projetos/>}></Route>
        </Routes>
    </main>
)

export default RotasExistente