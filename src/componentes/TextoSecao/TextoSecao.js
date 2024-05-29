import * as React from 'react';
import "./TextoSecao.css";

const TextoSecao = ({titulo, nome, descricao}) => {


    return(
        <>
            <h2 className='titulo'>{titulo} {nome ? <h2 className='destaque'>{nome}</h2> : null}</h2>
            <p className='descricao'>{descricao}</p>
        </>
        
    );
}

export default TextoSecao;