import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import fireIcon from '../assets/fire.png';
import dotsImage from '../assets/dots.png';
import sneakerImage from '../assets/White-Sneakers-PNG.png';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    { 
      title: 'Queima de Estoque Nike', 
      description: 'Descontos imperdíveis em tênis Nike para você renovar seu estilo.', 
      image: sneakerImage 
    },
    { 
      title: 'Novidades Adidas', 
      description: 'Conheça os lançamentos mais estilosos da Adidas.', 
      image: sneakerImage 
    },
    { 
      title: 'Tênis em Alta', 
      description: 'Os modelos mais procurados com descontos especiais.', 
      image: sneakerImage 
    },
    { 
      title: 'Promoção Relâmpago', 
      description: 'Só hoje: até 60% off em diversas marcas!', 
      image: sneakerImage 
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 4000); // Troca a cada 4 segundos
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToProducts = () => {
    navigate('/produtos');
    window.scrollTo(0, 0);
  };

  return (
    <section className="relative overflow-hidden py-10 bg-[#f0f0f0]">
      {/* Background Blur Decorativo */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[400px] h-[600px] bg-gradient-to-t from-[#f0f0f0] to-white blur-3xl z-0 pointer-events-none"></div>

      {/* Container do Slider com Animação */}
      <div className="relative z-10 w-full overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-in-out" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 max-w-7xl mx-auto min-h-[400px]">
              
              {/* Lado Esquerdo: Textos */}
              <div className="text-center lg:text-left">
                <p className="text-yellow-500 text-sm font-semibold mb-2">Melhores ofertas personalizadas:</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 leading-tight mb-6">
                  {slide.title.includes('Nike') ? (
                    <>
                      Queima de Estoque Nike
                      <img src={fireIcon} alt="Fogo" className="w-12 h-12 md:w-16 md:h-16 inline-block ml-2" />
                    </>
                  ) : slide.title}
                </h1>
                <p className="text-gray-600 text-sm md:text-base mb-6 max-w-xl mx-auto lg:mx-0">{slide.description}</p>
                <button
                  onClick={goToProducts}
                  className="bg-pink-600 hover:bg-pink-700 text-white px-12 py-3 rounded-lg font-semibold transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95"
                >
                  Ver Ofertas
                </button>
              </div>

              {/* Lado Direito: Imagem */}
              <div className="relative flex justify-center lg:justify-end items-center">
                <img src={slide.image} alt={slide.title} className="w-full max-w-[500px] object-contain drop-shadow-2xl" />
                <img src={dotsImage} alt="Decorativo" className="hidden md:block absolute right-[-20px] top-[10%] w-[120px] opacity-50" />
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Indicadores (Dots) */}
      <div className="relative z-20 flex justify-center mt-10 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentSlide ? 'bg-pink-600 w-8' : 'bg-gray-300 w-3'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;