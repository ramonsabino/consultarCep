function Resultado(props){
  const result = props.result;
  const goTo = props.goTo
  const keys = Object.keys(result);
  const elements = keys.map(key => 
    (<span key={key}><b>{key}</b>{result[key]}</span>)
  )  
  return <>
      
        <p>RESULTADOS PARA O CEP {result.cep}</p>
        {elements}
        <button onClick={() => goTo("Pesquisa")}>NOVA CONSULTA</button>
   </>
  }

  export default Resultado;