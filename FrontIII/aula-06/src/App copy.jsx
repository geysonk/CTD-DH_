
const carros = [
  {
    id: 1,
    modelo: "Argo",
  },
  {
    id: 2,
    modelo: "Fusion",
  },
  {
    id: 3,
    modelo: "Sonata",
   
  },
  {
    id: 4,
    modelo: "Pulse",
  }
];


function App() {
  
  return (
    <ul>
      {carros.map((carro) => (
        //Usamos o map para percorrer todo o array e retornar um elemento para cada item do array
        <li key={'list-car-${carro.id}'}>{carro.modelo} </li>
        //Usamos list-car- para facilitar o debug no console do navegador
      ))}  
    </ul>
  );
  
};

export default App
