import { useState } from "react"
import CardCor from "./CardCor";
import Form from "./Form";
import "./App.css"

function App() {

  const [nomeCor, setNomeCor] = useState("")
  const [corHex, setCorHex] = useState("")



  const [paletaCor, setPaletaCor] = useState([]);

  return(

    <div className="mainContent">
        <h1>Crie sua paleta de cores...</h1>

        <Form
          nomeCor={nomeCor}
          corHex={corHex}
          paletaCor={paletaCor}
          setNomeCor={setNomeCor}
          setCorHex={setCorHex}
          setPaletaCor={setPaletaCor}
        />

        {/* Salvando e alterando a paleta de cores */}
        <h1 className="subtitle">Minha paleta de cores</h1>
        <div className="grid">
          {
            paletaCor.map((paletaCor, index)=>{
              return(
                <div className="mainGrid">
                  <div className="container" key={index}>
                      <CardCor paletaCor={paletaCor} class="containerCardCor" />
                  </div>
                </div>
                // Criando a paleta de cores
              )
            })
          }
        </div>
        
        </div>
  )
}

export default App
