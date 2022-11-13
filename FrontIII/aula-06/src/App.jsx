
import ItemList from "./components/index";
import {carros} from "./mock/carros";

function App() {
  
  return (
    <ul>
      {carros.map((carro) => (
        <ItemList key={carro.id} item={carro}/>
      ))}  
    </ul>
  );
  
};

export default App;