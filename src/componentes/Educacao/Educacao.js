import * as React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import CarouselItem from '../CarouselItem/CarouselItem';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import CardEducacao from '../CardEducacao/CardEducacao';

const Educacao = () => {

    var cards = [
        {
            instituicao: 'IFB',
            tipo: "Ensino Médio",
            descricao: "No ensino médio me destaquei ao fazer esportes e ser considerado um aluno exemplar"
        },
        {
            instituicao: 'UnB',
            tipo: "Graduação",
            descricao: "Na graduação participei de cursos e grupos de estudo"
        },
    ]

    return (
        <div>
            {
                cards.map((card) => <CardEducacao card ={card}/> )
            }
        </div>
    );
}

export default Educacao;