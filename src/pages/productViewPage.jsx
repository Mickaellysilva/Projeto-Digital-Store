import { useParams } from 'react-router-dom';
import { useCart } from '../contexts/cartContext';
import { products } from '../data/products';
import { useState } from 'react';

const ProductViewPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { cartItems, addToCart, removeFromCart } = useCart();
  const isInCart = cartItems?.some((item) => item.id === product.id);

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [added, setAdded] = useState(isInCart);

  const handleToggleCart = () => {
    if (added) {
      removeFromCart(product.id);
    } else {
      addToCart({ ...product, size: selectedSize, color: selectedColor });
    }
    setAdded(!added);
  };

  const sizes = ['36', '37', '38', '39', '40', '41', '42'];
  const colors = ['Preto', 'Branco', 'Vermelho'];

  if (!product) return <div>Produto não encontrado.</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">

      <div className="flex justify-center items-center bg-gray-100 p-8 rounded w-full max-w-full">
        <img src={product.image} alt={product.name} className="object-contain max-h-[400px] w-full h-auto" />
      </div>

      <div className="flex flex-col w-full max-w-full">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-2">{product.name}</h1>
        <p className="text-pink-700 text-xl sm:text-2xl font-bold mb-1">R$ {product.price.toFixed(2)}</p>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">{product.description}</p>

        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Tamanho</h3>
          <div className="flex gap-2 flex-wrap">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 border rounded text-sm sm:text-base ${
                  selectedSize === size
                    ? 'bg-pink-600 text-white border-pink-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-pink-400'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Cor</h3>
          <div className="flex gap-2 flex-wrap">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-3 py-1 border rounded text-sm sm:text-base ${
                  selectedColor === color
                    ? 'bg-pink-600 text-white border-pink-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-pink-400'
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleToggleCart}
          className={`w-full text-center font-semibold text-white py-3 rounded-md transition-colors text-sm sm:text-base ${
            added ? 'bg-green-600 hover:bg-green-700' : 'bg-pink-700 hover:bg-pink-800'
          }`}
        >
          {added ? 'Adicionado ao carrinho' : 'Adicionar ao carrinho'}
        </button>
      </div>
    </div>
  );
};

export default ProductViewPage;








