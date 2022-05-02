import {useState} from 'react'
import consultaCep from 'cep-promise'

function numbersOnly(str){
  return str.replace(/[^\d]/g, '')
}
                                            
function Pesquisa(props) {
  const goTo = props.goTo;
  const ticket = props.ticket;
  const setResultado = props.setResultado;
  const [cepNumber,setCepNumber] = useState("");
  function handleChange(evt){
    const value = evt.target.value
    setCepNumber(numbersOnly(value));
  }

function clear(){
  setCepNumber("");
}

function handleSucess(dadosCEP){
const resultado = {
  "ESTADO: ": dadosCEP.state,
  "CIDADE: ": dadosCEP.city,
  "BAIRRO: ": dadosCEP.neighborhood,
  "AVENIDA/RUA: ": dadosCEP.street,
  // "SERVIÇO: ": dadosCEP.service
}
setResultado(resultado);
goTo("Resultado")
}




function handleError(err){
  const errorMessage = err.message;
  props.setErrorMessage(errorMessage);
  goTo("Erro")
}

function handleSearch(){
  ticket.current++;
  const currentTicket = ticket.current;
  goTo("Carregando")
  consultaCep(cepNumber)
    .then(result => currentTicket == ticket.current && handleSucess(result))
    .catch(err => currentTicket == ticket.current && handleError(err))
}

  return <>
          <p>Qual CEP você gostaria de consultar?</p>
          <p>Estado atual: {cepNumber} </p>
          <input value={(numbersOnly(cepNumber))} onChange={handleChange}></input>
          <button onClick={(clear)}>LIMPAR CONSULTA</button>
         <button onClick={handleSearch}>CONSULTA</button>
</>        
  }
  export default Pesquisa;