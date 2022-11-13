import "./Form.css"


function Form(props){

  return (
    <form className="mainForm">
      <div className="inputForm">
        <h2 className="subtitleInputNome">Nome</h2>
        <input
          class="inputNome" 
          value={props.nomeCor} 
          onChange={(event)=>props.setNomeCor(event.target.value)} 
          placeholder="Digite o nome da cor..."/>

        <h2 className="subtitleInputCor">RGB</h2>
        <input 
          className="inputCor"
          value={props.corRGB} 
          onChange={(event)=>props.setCorRGB(event.target.value)} 
          placeholder="Digite o RGB da cor..."/>

        <button type="button" onClick={salvarCor}>Salvar</button> 
      </div>
    </form>
  )

    function salvarCor(){

      function regex(cor) {
        const validationRegex = /^#([A-Fa-f0-9]{6})|^([A-Fa-f0-9]{6})$/;
        return !validationRegex.test(cor);
      }


    
      if(props.nomeCor == "" || props.corRGB == "" || regex(props.corRGB)){
        alert("Preencha os campos corretamente!")

      }else{

        props.setPaletaCor([...props.paletaCor, {
          nomeCor:props.nomeCor,
          corRGB:props.corRGB,
        } ])

        return (
          <form className={alert? "mainFormAlert":"mainForm"}>
            <div className="inputForm">
              <h2 className="subtitleInputNome">Nome</h2>
              <input
                class="inputNome" 
                value={props.nomeCor} 
                onChange={(event)=>props.setNomeCor(event.target.value)} 
                placeholder="Digite o nome da cor..."/>
      
              <h2 className="subtitleInputCor">RGB</h2>
              <input 
                className="inputCor"
                value={props.corRGB} 
                onChange={(event)=>props.setCorRGB(event.target.value)} 
                placeholder="Digite o RGB da cor..."/>
      
              <button type="button" onClick={salvarCor}>Salvar</button> 
            </div>
          </form>
        )
        
      }
    }


  
}

export default Form;