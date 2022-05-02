import logo from './logo.svg';
import {useState, useRef} from 'react';
import './App.css';
import Pesquisa from "./Containers/Pesquisa"
import Resultado from "./Containers/Resultado"
import Erro from "./Containers/Erro"
import Carregando from "./Containers/Carregando"

function App(){
    const [errorMessage, setErrorMessage] = useState("")
    const [nomeTela, setNomeTela] = useState("Pesquisa");
    const [resultado, setResultado] = useState({});
    const ticket = useRef(1);

   function goTo(nomeTela){
     setNomeTela(nomeTela);
     console.log('Navegando na ',{nomeTela});
 
    }
 
 
 
 return <div>
 
  <div id="divMae">
    <header id="divBusca">
      {nomeTela == "Pesquisa" ? <Pesquisa goTo={goTo} setResultado={setResultado} setErrorMessage={setErrorMessage} ticket={ticket}/>: null}
      {nomeTela == "Resultado" ? <Resultado result={resultado} goTo={goTo} />: null}
      {nomeTela == "Erro" ? <Erro errorMessage={errorMessage} goTo={goTo} />: null}
      {nomeTela == "Carregando" ? <Carregando goTo={goTo} ticket={ticket}/>: null}
      
    </header>
  
  </div>
  <footer id="rodaPe" ><b>BY RAMON SABINO</b> </footer>
  
  </div>
 

  
}

export default App;
