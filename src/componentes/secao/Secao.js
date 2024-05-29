import * as React from 'react';
import "./Secao.css";
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Secao = ({tipoSecao, children}) => {
  const nomeClasse = tipoSecao

  const childrenArray = React.Children.toArray(children);

  // Garantindo que temos pelo menos dois filhos
  const firstChild = childrenArray[0];
  const secondChild = childrenArray[1];
  
  return (
  
    <Container fixed className= {nomeClasse}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 12}}>
        <Grid item xs={6}>
          {firstChild}
        </Grid>
        <Grid item xs={6}>
          {secondChild}
        </Grid>
      </Grid>
    </Container>
    
    );
}


export default Secao; 