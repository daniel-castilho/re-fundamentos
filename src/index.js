import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

import './index.css'

ReactDOM.render(
    <div id="app">
        <Primeiro />
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Pedro Silva"
            nota={9.3} />
        <Fragmento />
    </div>,
    document.getElementById('root')
)