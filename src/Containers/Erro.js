function Erro(props){
    const goTo = props.goTo
  return <>
     
          <p>ERRO NA CONSULTA</p>
          <p>{props.errorMessage}</p>
         <button onClick={() => goTo("Pesquisa")}>RETORNAR PARA PÁGINA INICIAL</button>
  
         </>
    
}

  export default Erro;