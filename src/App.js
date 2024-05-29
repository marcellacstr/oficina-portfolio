
import './App.css';
import { Image } from '@mui/icons-material';
import CarouselProjetos from './componentes/CarouselProjetos/CarouselProjetos';
import Experiencias from './componentes/Experiencias/Experiencias';
import TextoSecao from './componentes/TextoSecao/TextoSecao';
import Secao from './componentes/secao/Secao';
import Educacao from './componentes/Educacao/Educacao';
import imagem from '/Users/Marcella/projetos_react_native/projetos_React/oficina-portfolio/src/assets/image.png'
function App() {
  
  return (
    <>
      <Secao tipoSecao={'landpage'}>
        <TextoSecao titulo = "Olá! Meu nome é" nome = "Sarah Jones" descricao="Aqui um texto legal sobre você e o que você faz da vida. Descreva-se um pouco também "/>
        <img src={imagem} alt="Imagem da Sarah Jones" />
      </Secao>

      <Secao tipoSecao={'educacao'}>
        <TextoSecao titulo = "Educação" descricao="aqui uma descrição sobre a educação que você faz no momento"/>
        <Educacao></Educacao>
      </Secao>

      <Secao tipoSecao={'projetos'}>
        <TextoSecao titulo = "Projetos" descricao="Descreva e destaque os projetos que são mais do seu interesse"/>
        <CarouselProjetos></CarouselProjetos>
      </Secao>

      <Secao tipoSecao={'experiencias'}>
        <TextoSecao titulo = "Experiências Profissionais" descricao="Aqui talvez uma descrição sobre o seu emprego atual ou um comentário sobre a sua atuação profissional "/>
        <Experiencias/>
      </Secao>

    </>
    
  );
}

export default App;
