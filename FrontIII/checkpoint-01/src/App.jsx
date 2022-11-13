import { useState } from "react"
import CardCor from "./Card";
import Formulario from "./Formulario";
import "./App.css";
 
function App() {

  const [nomeCor, setNomeCor] = useState("")
  const [cor, setCor] = useState("")
  const [paletaCores, setPaletaCores] = useState([]);
  //Salvar as cores em um array


  return (
    <div className="App">
      
      <h1 className="title1">SELECIONE SUAS CORES</h1>

      <Formulario
        nomeCor={nomeCor}
        cor={cor}
        paletaCores={paletaCores}
        setNomeCor={setNomeCor}
        setCor={setCor}
        setPaletaCores={setPaletaCores}
      />

      <div className="mainContent2">
        <h1 className="title1">CORES FAVORITAS</h1>
        {
          paletaCores.map((paletaCores)=>{
          return(
          <CardCor paletaCores={paletaCores}/>
        )
      })
    }
      </div>

      

    </div>
  );
}
 
export default App;
