import './App.css'
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {


  return (
    <>
      <div style={{ marginTop: "70px" }}> {/* Espacio para el navbar */}
        <NavBar />
        <ItemListContainer greetingMessage="¡Bienvenidos a nuestra tienda!" />
      </div>
    </>
  )
}

export default App;
