import React from 'react';

function ProductCard() {
  return (
    <div className="card">
      <img src="https://via.placeholder.com/300x200" alt="Imagen" />
      <div className="card-body">
        <h5 className="card-title">Producto Ejemplo</h5>
        <p className="card-text">Descripción corta del producto. Es un producto increíble que te encantará.</p>
        <button className="btn-custom">Añadir al carrito</button>
      </div>
    </div>
  );
}

export default ProductCard;