function Button(props){


    return (
    <button onClick={props.click} style={{backgroundColor:props.color}}>
        {props.name}
        </button> //Referencia a função click do componente App para definição particular de cada botão
    )

}

export default Button;