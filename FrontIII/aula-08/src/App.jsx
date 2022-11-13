import {useRef, useState} from 'react';
//Referencias dos elementos hook

const App = () =>{

  const inputRef = useRef(null);
  {/* Componente não controlado se não precisar sempre mostrar os dados ao usuário */}

  const [valueImput, setValueImput] = useState("")
  {/* Componente controlado  se precisar sempre informar os dados ao usuário*/}

  const [errorImput, setErrorImput] = useState("")

  const [valueSelect, setValueSelect] = useState(false)
  
  function handleSubmit(event){
    // alert(Submit);


    if(valueImput.trim()){
      setErrorImput("");
      setValueImput("");
      alert("Formulário Válido");

    }else{
      setErrorImput("Digite um nome no campo");
    }

    event.preventDefault();

    alert(inputRef.current.value);
    //inspecionar no navegador na opcao console log (componente não controlado)
  }

  return (
    <>
    <h1>{valueSelect.toString}</h1>
    <form onSubmit={handleSubmit}>

      {/* <input ref={inputRef} /> */}


      <input onChange={(event) => setValueImput(event.target.value)}/>
      {/* Componente controlado  se precisar sempre informar os dados ao usuário*/}
      
      <label>
        Pressionado
        <input type="checkbox" onChange={(event) => setValueSelect(event.target.valueSelect)}/>
      </label>
      
      <p>{errorImput}</p>

      <input type="submit"/>

    </form>
    </>
  );
};

export default App;
