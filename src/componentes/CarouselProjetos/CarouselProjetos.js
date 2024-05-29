import * as React from 'react';
import "./CarouselProjetos.css";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import CarouselItem from '../CarouselItem/CarouselItem';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const CarouselProjetos = () => {

    var items = [
        {
            imagem: 'https://hermes.dio.me/articles/cover/1ee9c50a-fccd-4ec8-b57a-6a592a157a6d.png',
            nome: "Primeiro Projeto",
            descricao: "Eu fiz um artigo sobre como eu sou legal", 
            link: 'google.com'
        },
        {
            imagem: 'https://www.istockphoto.com/resources/images/IllustrationsLanding/Essentials-1472236815.jpg',
            nome: "Segundo Projeto",
            descricao: "Eu fiz um site sobre como eu sou legal", 
            link: 'google.com'
        },
    ]

    return (
        <Carousel
            NextIcon={<NavigateNextIcon/>}
            PrevIcon={<NavigateBeforeIcon/>}
            animation='slide'
        >
            {
                items.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>
    );
}

export default CarouselProjetos;