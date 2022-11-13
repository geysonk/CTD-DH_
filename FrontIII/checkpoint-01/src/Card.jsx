function CardCor(props){
  return(
    <div>
      <h1>{props.color.name}</h1>
      <img src={props.color.url} width={120} height={120}/>
    </div>
  )
}

export default CardColors;