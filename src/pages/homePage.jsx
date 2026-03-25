import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoShirtOutline } from "react-icons/io5";
import { PiBaseballCapLight, PiHeadphonesLight, PiPantsLight } from "react-icons/pi";
import { GiConverseShoe } from "react-icons/gi";
import { FaArrowLeft } from "react-icons/fa";

// Importando os componentes necessários
import Section from '../components/section';
import Hero from '../components/hero';
import ProductListing from '../components/HomePage/productListing';
import airJordanImg from '../assets/Laye 1.png';

// IMPORTANTE: Importando a lista oficial de produtos do seu arquivo de dados
import { products } from '../data/products'; 

const categoryIcons = [
  { icon: <IoShirtOutline size={40} />, label: "Camisetas" },
  { icon: <PiPantsLight size={40} />, label: "Calças" },
  { icon: <PiBaseballCapLight size={40} />, label: "Bonés" },
  { icon: <PiHeadphonesLight size={40} />, label: "Headphones" },
  { icon: <GiConverseShoe size={40} />, label: "Tênis" },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filtramos os produtos baseados na categoria selecionada usando a lista importada
  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products;
    return products.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryClick = (categoryLabel) => {
    setSelectedCategory(prev => prev === categoryLabel ? null : categoryLabel);
  };

  const goToProducts = () => {
    navigate('/produtos');
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Hero />

      <div className="bg-[#f6f6f6] pb-20 pt-10">
        <h2 className="text-2xl font-semibold text-gray-700 px-4 md:px-20 lg:px-40 mb-6">
          Coleções em destaque:
        </h2>

        {/* Banners de Coleção */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-20 lg:px-40">
          {[ "/collection-1.png", "/collection-2.png", "/collection-3.png" ].map((image, index) => (
            <div key={index} className="relative bg-white rounded-xl shadow aspect-square overflow-hidden group">
              <img src={image} alt={`Coleção ${index + 1}`} className="w-full h-full object-contain p-4 transition-transform group-hover:scale-105" />
              <div className="absolute top-2 left-4 bg-lime-200 text-[12px] font-bold text-gray-900 px-3 py-[3px] rounded-full">30% OFF</div>
              <div className="absolute bottom-6 left-4">
                <button onClick={goToProducts} className="bg-white text-pink-600 text-sm font-semibold px-6 py-2 rounded-md shadow hover:bg-pink-100 transition">
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Ícones de Categoria */}
        <Section>
          <div className="flex justify-center gap-6 flex-wrap px-4 mt-10">
            {categoryIcons.map((item, index) => (
              <div
                key={index}
                onClick={() => handleCategoryClick(item.label)}
                className="flex flex-col items-center gap-2 cursor-pointer group"
              >
                <div className={`w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center transition-all ${selectedCategory === item.label ? 'ring-4 ring-pink-600 text-pink-600 scale-110' : 'text-gray-700 group-hover:text-pink-600'}`}>
                  {item.icon}
                </div>
                <span className={`text-sm font-medium transition-colors ${selectedCategory === item.label ? 'text-pink-600 font-bold' : 'text-gray-700'}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Botão para limpar filtro */}
          {selectedCategory && (
            <div className="text-center mt-8">
              <button
                onClick={() => setSelectedCategory(null)}
                className="flex items-center gap-2 mx-auto text-pink-600 font-semibold hover:underline"
              >
                <FaArrowLeft />
                Voltar para todos os produtos
              </button>
            </div>
          )}
        </Section>

        {/* Listagem de Produtos Filtrados - Agora usando a lista sincronizada */}
        <Section title={selectedCategory ? `Produtos em ${selectedCategory}` : "Produtos em alta"}>
          <ProductListing products={filteredProducts} />
        </Section>
      </div>

      {/* Banner de Oferta Especial */}
      <section className="bg-white py-16 px-4 md:px-20 lg:px-32 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 md:left-44 md:translate-x-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-t from-white to-purple-200/40 z-0"></div>
        <div className="flex-1 z-10">
          <img src={airJordanImg} alt="Air Jordan" className="w-full max-w-md mx-auto" />
        </div>
        <div className="flex-1 text-center md:text-left z-10">
          <p className="text-sm font-semibold text-pink-600 mb-2">Oferta especial</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600 leading-tight mb-4">
            Air Jordan edição de<br />colecionador
          </h2>
          <p className="text-gray-600 mb-6 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button onClick={goToProducts} className="bg-pink-600 hover:bg-pink-700 text-white px-12 py-3 rounded-lg font-semibold transition shadow-lg">
            Ver Oferta
          </button>
        </div>
      </section>
    </>
  );
};

export default HomePage;