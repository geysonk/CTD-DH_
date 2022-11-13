import Button from './Button'
import Title from './Title'

function App() {

  function btn1func(){
    alert("BTN1");
  }
  function btn2func(){
    alert("BTN2");
  }
  function btn3func(){
    alert("BTN3");
  }

  return (
    <>
    <Title text="Meu titulo 1"/>
    <Title text="Meu titulo 2"/>
    <Title/>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tenetur iste tempora! Quae maiores qui animi, laboriosam iusto molestiae commodi possimus accusamus recusandae aliquam unde ipsum harum. Odio, distinctio consequatur.</p>
    <Button name="Pressione" color="red" click={btn1func} />
    <Button name="Clique aqui" color="blue" click={btn2func}/>
    <Button name="Clique aqui" color="green" click={btn3func}/>
    </>
  )

}

export default App;
