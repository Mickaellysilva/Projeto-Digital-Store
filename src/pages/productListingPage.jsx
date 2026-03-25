import { useState } from 'react';
import Layout from './layout';
import Section from '../components/section';
import ProductListingList from '../components/AbaProdutos/productListingList';

// 1. IMPORTANTE: Importando a lista oficial de produtos
import { products as allProducts } from '../data/products'; 

const ProductListingPage = () => {
  const [order, setOrder] = useState('menor-preco');
  const [filters, setFilters] = useState([]);

  // 2. Ajustando as opções de filtro para bater com as categorias do seu products.js
  const categoryOptions = [
    { text: 'Tênis', value: 'Tênis' },
    { text: 'Camisetas', value: 'Camisetas' },
    { text: 'Calças', value: 'Calças' },
    { text: 'Bonés', value: 'Bonés' },
    { text: 'Headphones', value: 'Headphones' },
  ];

  const handleFilterChange = (value) => {
    if (filters.includes(value)) {
      setFilters(filters.filter(f => f !== value));
    } else {
      setFilters([...filters, value]);
    }
  };

  // Filtra os produtos baseados nas categorias selecionadas
  const filteredProducts = allProducts.filter(product => {
    if (filters.length === 0) return true;
    return filters.includes(product.category);
  });

  // Ordena os produtos por preço
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    // Usamos priceDiscount se houver, caso contrário usamos price
    const priceA = a.priceDiscount || a.price;
    const priceB = b.priceDiscount || b.price;

    if (order === 'menor-preco') return priceA - priceB;
    if (order === 'maior-preco') return priceB - priceA;
    return 0;
  });

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row gap-8 px-4 sm:px-6 md:px-10 py-8 w-full max-w-[1440px] mx-auto">
        
        {/* ASIDE: Filtros e Ordenação */}
        <aside className="w-full lg:w-[308px] flex-shrink-0">
          <div className="mb-6">
            <label htmlFor="order-select" className="block mb-2 text-gray-700 text-sm font-bold">
              Ordenar por
            </label>
            <select
              id="order-select"
              className="w-full h-[48px] border border-gray-300 rounded px-3 text-gray-700 cursor-pointer focus:border-pink-600 outline-none"
              value={order}
              onChange={e => setOrder(e.target.value)}
            >
              <option value="menor-preco">Menor preço</option>
              <option value="maior-preco">Maior preço</option>
            </select>
          </div>

          <div className="bg-white p-6 border border-gray-200 rounded-md shadow-sm">
            <h3 className="text-gray-700 text-base font-bold mb-4 border-b pb-2 uppercase tracking-wider">
              Filtrar por
            </h3>
            {categoryOptions.map(({ text, value }) => (
              <div key={value} className="flex items-center mb-3 group">
                <input
                  type="checkbox"
                  id={value}
                  checked={filters.includes(value)}
                  onChange={() => handleFilterChange(value)}
                  className="w-5 h-5 accent-pink-600 mr-3 cursor-pointer"
                />
                <label 
                  htmlFor={value} 
                  className="text-gray-600 text-sm cursor-pointer group-hover:text-pink-600 transition-colors"
                >
                  {text}
                </label>
              </div>
            ))}
          </div>
        </aside>

        {/* MAIN: Listagem de Produtos */}
        <main className="flex-1 w-full">
          <Section 
            title={
              <span className="text-gray-700 text-lg">
                Resultado para <b className="text-gray-900">"Produtos"</b> - {sortedProducts.length} produtos
              </span>
            } 
            titleAlign="left"
          >
            <ProductListingList products={sortedProducts} />
          </Section>
        </main>
      </div>
    </Layout>
  );
};

export default ProductListingPage;