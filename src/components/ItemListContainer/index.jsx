import './itemlistcontainer.css';

function ItemListContainer({ greetingMessage }) {
  return (
    <div className="item-list-container">
      <h2>{greetingMessage}</h2>
      <div className="items">
        {/* Acá vamos a poner cards a futuro */}
        <div className="item">
          <img src="/src/components/img/remera1.png" alt="Producto" />
          <h4>Remera 1</h4>
          <p>Descripción de remera 1.</p>
          <button className="btn-custom">Añadir al carrito</button>
        </div>
        <div className="item">
          <img src="/src/components/img/remera2.jpg" alt="Producto" />
          <h4>Remera 2</h4>
          <p>Descripción de remera 2.</p>
          <button className="btn-custom">Añadir al carrito</button>
        </div>
        <div className="item">
          <img src="/src/components/img/remera3.jpg" alt="Producto" />
          <h4>Producto 3</h4>
          <p>Descripción de remera 3.</p>
          <button className="btn-custom">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;