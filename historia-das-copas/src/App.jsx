import './App.css'
import ListaArtilheiros from './components/ListaArtilheiros'
import MenuAnos from './components/MenuAnos';
import Banner from './components/Banner';
import { useState } from 'react'


function App() { // Aqui dentro, antes do "return", é onde a gente coloca nossa lógica, variáveis e objetos JavaScript!

  
const todasAsCopas = [
  {

    ano : "2002",

    sede : "Coreia do Sul e Japão",

    campeao : "Brasil",

    vice : "Alemanha",

    artilheiros : [

    { nome : "Ronaldo", gols : 8 },

    { nome : "Rivaldo", gols : 5 },

    { nome : "Miroslav Klose", gols : 5 }

    ],
    

    estadios : [

        { nome : "Estádio Internacional de Yokohama", cidade : "Yokohama", capacidade : 72000 },

        { nome : "Estádio de Saitama", cidade : "Saitama", capacidade : 63000 },

        { nome : "Estádio de Osaka", cidade : "Osaka", capacidade : 52000 }

    ],

  

  },

  {
    ano : "1994",

    sede : "Estados Unidos",

    campeao : "Brasil",

    vice : "Itália",

    artilheiros : [

    { nome : "Romário", gols : 8 },

    { nome : "Bebeto", gols : 3 },

    { nome : "Diego Maradona", gols : 1 }

    ],
  }

];

const [copaAtiva,setCopaAtiva] = useState(todasAsCopas[0]);

  return( // Aqui dentro do return é onde colocamos o nosso HTML!

    <div>
      <Banner dadosDaCopa={copaAtiva}/>
      <ListaArtilheiros listaDeArtilheiros={copaAtiva.artilheiros}/>
      <MenuAnos copas={todasAsCopas} mudarCopa={setCopaAtiva}/>

    </div>
       
  )


}

export default App