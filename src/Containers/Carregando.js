function Carregando(props) {
//    const navegarPara = props.navegarPara;
const goTo  = props.goTo;
const ticket = props.ticket;

function handleCancel(){
ticket.current++;
goTo("Pesquisa")
}

   return <>
          <p>CARREGANDO RESULTADO...</p>
         <button onClick={handleCancel}>CANCELAR</button>
         </>
  }


  export default Carregando;