import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Container } from 'react-bootstrap'
import Cabecalho from './Cabecalho'

const Pagina = (props) => {
    return (
        <>
            <Cabecalho />
            <div className='bg-secondary py-3 text-white text-center mb-3'>
                <Container>
                    <h1 className='display-4'>{props.titulo}</h1>
                </Container>
            </div>

            {props.children}

            <div style={{ width: '100%' }} className='bg-secondary bottom-0 py-3 text-white text-center'>
                <p>Todos os diretos reservados®</p>
            </div>
        </>
    )
}

export default Pagina