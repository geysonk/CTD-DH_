function Formulario(props){

    function salvarCor(){
      
        if(props.nomeCor == "" || props.cor == ""){
          alert("Preencha todos os campos para salvar a cor!");
        }else{

          props.setPaletaCores([...props.paletaCores, {
            nomeCor:props.nomeCor,
            cor:props.cor,
          } ])

        }

      return(
          <form>
            {/* <div className="mainContent">
              <label className="label">
              <h1>Nome</h1> */}
              <input 
                  value={props.nomeCor} 
                  onChange={(event)=>props.setNomeCor(event.target.value)} 
                  placeholder="Digite o nome da cor"/>
              {/* </label>

              <label className="label">
              <h1>Cor</h1> */}
              <input 
                  value={props.cor} 
                  onChange={(event)=>props.setCor(event.target.value)} 
                  placeholder="Digite o RGB da cor"/>
              {/* </label>
            </div> */}

            <button type="button" onClick={salvarCor}>Salvar</button>
          </form>
    )

  }
}
  export default Formulario;