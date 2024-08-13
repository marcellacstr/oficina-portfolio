
import './App.css';
import { Image } from '@mui/icons-material';
import CarouselProjetos from './componentes/CarouselProjetos/CarouselProjetos';
import Secao from './componentes/secao/Secao';
import imagem from '/Users/Marcella/projetos_react_native/projetos_React/oficina-portfolio/src/assets/image.png'
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
        
      </Secao>

    </>
    
  );
}

export default App;
