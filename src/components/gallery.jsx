import { useState } from 'react';
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';

const Gallery = ({ images, width = '100%', height = 'auto', radius = 'xl', showThumbs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fallback para caso images seja undefined ou vazio
  if (!images || images.length === 0) return null;

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative mx-auto" style={{ width: width }}>
      {/* Container Principal da Imagem */}
      <div 
        className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[680px] overflow-hidden"
        style={{ borderRadius: radius === 'xl' ? '0.75rem' : radius }}
      >
        <img
          src={images[currentIndex].src}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover object-center"
        />

        {/* Botão Anterior */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg disabled:opacity-30 z-10 transition-all hover:scale-110"
        >
          <img src={arrowLeft} alt="Anterior" className="w-6 h-6" />
        </button>

        {/* Próximo Botão */}
        <button
          onClick={handleNext}
          disabled={currentIndex === images.length - 1}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg disabled:opacity-30 z-10 transition-all hover:scale-110"
        >
          <img src={arrowRight} alt="Próxima" className="w-6 h-6" />
        </button>

        {/* Indicadores (Dots) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentIndex === index ? 'bg-pink-600 scale-125' : 'bg-gray-300/80'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Miniaturas (Thumbnails) */}
      {showThumbs && (
        <div className="flex justify-center mt-4 gap-4 flex-wrap">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Miniatura ${index + 1}`}
              className={`w-24 h-20 object-cover cursor-pointer transition-all border-2 ${
                currentIndex === index ? 'border-pink-600' : 'border-transparent hover:border-gray-300'
              }`}
              style={{ borderRadius: radius === 'xl' ? '0.5rem' : radius }}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;