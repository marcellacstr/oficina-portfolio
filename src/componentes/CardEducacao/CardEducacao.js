import * as React from 'react';
import './CardEducacao.css'
import { Paper, Button, Card } from '@mui/material'

const CardEducacao = (props) => {
    console.log(props)
    return(
        <Paper elevation={3}
        variant="outlined"
        square={false}
        className='cardEducacao'>
            <h2>{props.card.instituicao}</h2>
            <h3> {props.card.tipo} </h3>
            <p> {props.card.descricao}</p>
        </Paper>
        
    );
}

export default CardEducacao; 