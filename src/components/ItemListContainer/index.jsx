import './itemlistcontainer.css';
import remera1 from "../../components/img/remera1.png";
import remera2 from "../../components/img/remera2.jpg";
import remera3 from "../../components/img/remera3.jpg";

function ItemListContainer({ greetingMessage }) {
  return (
    <div className="item-list-container">
      <h2>{greetingMessage}</h2>
      <div className="items">
        {/* Acá vamos a poner cards a futuro */}
        <div className="item">
          <img src={remera1} alt="Producto" />
          <h4>Remera 1</h4>
          <p>Descripción de remera 1.</p>
          <button className="btn-custom">Añadir al carrito</button>
        </div>
        <div className="item">
          <img src={remera2} alt="Producto" />
          <h4>Remera 2</h4>
          <p>Descripción de remera 2.</p>
          <button className="btn-custom">Añadir al carrito</button>
        </div>
        <div className="item">
          <img src={remera3} alt="Producto" />
          <h4>Producto 3</h4>
          <p>Descripción de remera 3.</p>
          <button className="btn-custom">Añadir al carrito</button>
        </div>
        <div className="item">
          <img src={remera1} alt="Producto" />
          <h4>Remera 1</h4>
          <p>Descripción de remera 1.</p>
          <button className="btn-custom">Añadir al carrito</button>
        </div>
        <div className="item">
          <img src={remera2} alt="Producto" />
          <h4>Remera 2</h4>
          <p>Descripción de remera 2.</p>
          <button className="btn-custom">Añadir al carrito</button>
        </div>
        <div className="item">
          <img src={remera3} alt="Producto" />
          <h4>Producto 3</h4>
          <p>Descripción de remera 3.</p>
          <button className="btn-custom">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;