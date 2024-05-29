import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Experiencias() {
    const experiencias = [
        {
            data: '2023 - Presente',
            nome: 'Estagiário no Instituto Federal de Brasília',
            descricao: 'Aqui uma descrição do trabalho que você fez na empresa e que se expande conforme a gente clica no botão.',
        },
        {
            data: '2022 - 2023',
            nome: 'Estagiário no Google',
            descricao: 'Aqui uma descrição do trabalho que você fez na empresa e que se expande conforme a gente clica no botão.',
        },
        {
            data: '2021 - 2022',
            nome: 'Estagiário na empresa Meta',
            descricao: 'Aqui uma descrição do trabalho que você fez na empresa e que se expande conforme a gente clica no botão.',
        },
        {
            data: '2020 - 2021',
            nome: 'Estagiário na empresa IFood',
            descricao: 'Aqui uma descrição do trabalho que você fez na empresa e que se expande conforme a gente clica no botão.',
        }
    ]
    
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography><b>{experiencias[0].data}:</b> {experiencias[0].nome}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {experiencias[0].descricao}
          </Typography>
        </AccordionDetails>
      </Accordion>

      {experiencias.slice(1).map(experiencia => (
            <Accordion key={experiencia.id}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography><b>{experiencia.data}:</b> {experiencia.nome}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {experiencia.descricao}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        ))}




      
      
    </div>
  );
}