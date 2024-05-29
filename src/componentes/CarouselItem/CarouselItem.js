import * as React from 'react';
import './CarouselItem.css'
import { Paper, Button } from '@mui/material'

const CarouselItem = (props) => {

    return (
        <Paper className='card'>
            <img
            src= {props.item.imagem}
            alt={props.item.nome}
            loading="lazy"
            className='imagem'
            />
            <div className='informacoesProjeto'>
                <h2>{props.item.nome}</h2>
                <p>{props.item.descricao}</p>
                <a href={props.item.link} className='link'>
                    Clique aqui para saber mais!
                </a>
            </div>
            
        </Paper>
    );
}

export default CarouselItem; 