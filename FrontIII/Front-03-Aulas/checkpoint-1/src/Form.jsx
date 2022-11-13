import "./Form.css"


function Form(props){

  return (
    <form className="mainForm">
      <div className="inputForm">
        <h2 className="subtitleInputNome">Nome</h2>
        <input
          className="inputNome" 
          value={props.nomeCor} 
          onChange={(event)=>props.setNomeCor(event.target.value)} 
          placeholder="Digite o nome da cor..."/>

        <h2 className="subtitleInputCor">Código da cor</h2>
        <input 
          className="inputCor"
          value={props.corHex} 
          onChange={(event)=>props.setCorHex(event.target.value)} 
          placeholder="Digite o código exadecimal da cor..."/>

        <button type="button" onClick={salvarCor}>Salvar</button> 
      </div>
    </form>
  )

    function salvarCor(){

      function regex(cor) {
        const validationRegex = /^#([A-Fa-f0-9]{6})|^([A-Fa-f0-9]{6})$/;
        return !validationRegex.test(cor);
      }


    
      if(props.nomeCor.length <3 || props.nomeCor == "" || props.corHex == "" || regex(props.corHex)){
        alert("Por favor, verifique os dados inseridos no formulário!");

      }else{

        props.setPaletaCor([...props.paletaCor, {
          nomeCor:props.nomeCor,
          corHex:props.corHex,
        } ])      
      }
    }


  
}

export default Form;