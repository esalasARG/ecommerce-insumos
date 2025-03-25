import { FaShoppingCart } from "react-icons/fa";
import "./cartwidget.css";

function CartWidget() {
    const cartItemCount = 2; // Simulación de productos en el carrito
    return (
      <div className="cart-widget">
        <FaShoppingCart />
        {cartItemCount > 0 && (
          <div className="cart-badge">
            {cartItemCount}
          </div>
        )}
        <span>Carrito</span>
    </div>
    );
}

export default CartWidget;