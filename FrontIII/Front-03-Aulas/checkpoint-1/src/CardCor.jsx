import App from './App'
import './CardCor.css'
import form from "./Form"

function CardCor(props){

  const cardStyle = {
    backgroundColor: props.paletaCor.corHex,
  };
  

  return(
    <div className="mainCard" style={cardStyle} >
      <p className="titulo">{props.paletaCor.nomeCor}</p>
      <h2>{props.paletaCor.corHex}</h2>
    </div>
  )
}

export default CardCor;