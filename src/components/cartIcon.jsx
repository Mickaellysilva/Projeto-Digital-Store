import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../contexts/cartContext';

const CartIcon = ({ onToggle }) => {
  const { cartItems } = useCart();

  const handleClick = (event) => {
    // stopPropagation evita que o clique propague para o documento
    // impedindo que o dropdown feche no momento em que abre
    event.stopPropagation();
    onToggle();
  };

  return (
    <button className="relative p-2" onClick={handleClick}>
      <FiShoppingCart className="text-2xl text-gray-700 hover:text-pink-600 transition-colors" />
      
      {cartItems.length > 0 && (
        <span className="absolute top-0 right-0 bg-pink-600 text-white text-[10px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center border-2 border-white">
          {cartItems.length}
        </span>
      )}
    </button>
  );
};

export default CartIcon;