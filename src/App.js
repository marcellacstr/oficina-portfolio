
import './App.css';
import { Image } from '@mui/icons-material';
import CarouselProjetos from './componentes/CarouselProjetos/CarouselProjetos';
import Secao from './componentes/secao/Secao';
import Experiencias from './componentes/Experiencias/Experiencias';
import imagem from './assets/image.png'
function App() {
  
  return (
    <>
      <Secao tipoSecao={'landpage'}>
        <img src={imagem} alt="Imagem da Sarah Jones" />
      </Secao>

      <Secao tipoSecao={'educacao'}>
       
      </Secao>

      <Secao tipoSecao={'projetos'}>
        
        <CarouselProjetos></CarouselProjetos>
      </Secao>

      <Secao tipoSecao={'experiencias'}>
        <Experiencias/>
      </Secao>

    </>
    
  );
}

export default App;
