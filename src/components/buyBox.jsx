import { useContext } from "react";
// Verifique se o seu context exporta CartContext ou useCart diretamente
import { CartContext } from "../contexts/cartContext"; 

const BuyBox = ({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  product, 
  children,
}) => {
  const { addToCart } = useContext(CartContext); 

  return (
    <div className="flex flex-col gap-4">
      {/* Nome do produto: 32px e dark-gray */}
      <h1 className="text-[32px] font-bold text-dark-gray leading-tight">{name}</h1>
      
      {/* Referência: 12px e dark-gray-3 */}
      <p className="text-[12px] text-dark-gray-3 font-medium">REF: {reference}</p>
      
      {/* Avaliação: Requisito de fundo warning e estrela branca */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 bg-warning px-3 py-1 rounded-[4px]">
          <span className="text-white text-[14px] font-bold">{stars}</span>
          <img src="/src/assets/star-icon.svg" alt="estrela" className="w-3 h-3" />
        </div>
        <span className="text-[14px] text-light-gray font-medium">({rating} avaliações)</span>
      </div>

      {/* Preços: Lógica de exibição conforme documentação */}
      <div className="flex items-baseline gap-2 mt-2">
        <span className="text-[32px] font-bold text-dark-gray-2">
          R$ {priceDiscount ? priceDiscount.toFixed(2) : price.toFixed(2)}
        </span>
        {priceDiscount && (
          <span className="text-[16px] line-through text-light-gray-2 ml-2">
            R$ {price.toFixed(2)}
          </span>
        )}
      </div>

      {/* Descrição: 14px e dark-gray-2 */}
      <p className="text-[14px] text-dark-gray-2 leading-relaxed tracking-wide mb-4">
        {description}
      </p>

      {/* Onde entrarão os ProductOptions (Tamanho e Cor) */}
      <div className="flex flex-col gap-5">
        {children}
      </div>

      {/* Botão comprar: Requisito de cor warning e texto white 16px */}
      <button
        onClick={() => addToCart(product)}
        className="w-full md:w-[220px] h-[48px] bg-warning hover:opacity-90 text-white rounded-lg text-[16px] font-bold transition-all uppercase tracking-wider mt-6"
      >
        Comprar
      </button>
    </div>
  );
};

export default BuyBox;