function Title({text="Padrão"}){
    //Forma de substituir a props por um texto específico caso não seja passado nada como parâmetro

    
    return (
        <h1>{text}</h1>
    );
}
export default Title;