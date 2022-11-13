import { useState } from "react";

const App = () => {

 
  const [numero, setNumero] = useState(0);
  //Hooks são funções que permitem que você use o estado e outras funcionalidades do React sem escrever uma classe.

  // const [valores, setValores] = useState([10, 20, 30, 40, 50]);
  const [valores, setValores] = useState([]);

  const handleButton = () => {
    //Função que incrementa o valor do estado numero ao clicar no botão

    setNumero(numero + 1);
    setValores([...valores, numero]);
    //Spread operator é utilizado para copiar os valores de um array para outro
  }

  /*const [nome, setNome] = useState("Geyson");*/
    
  return (
  <div>
    <h1>{numero}</h1>

    {
      valores.map((valor) => {
        return <p>{valor}</p>
      }
      )
    }

    <button onClick = {handleButton}>Aperte</button>
  </div>
  )
}

export default App
