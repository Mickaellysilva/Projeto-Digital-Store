import { useState } from 'react';
import Layout from './layout';
import Section from '../components/section';
import ProductListingList from '../components/AbaProdutos/productListingList';

const allProducts = [
  {
    id: 1,
    name: 'K-Swiss V8 - Masculino',
<<<<<<< HEAD
    image: '/product-thumb-1.png',
=======
    image: '/product-thumb-1.png', 
>>>>>>> 27f5083 (feat: setup inicial com carrossel animado e correções de layout)
    price: 200,
    priceDiscount: 149.9,
    category: 'cat1',
  },
  {
    id: 2,
    name: 'Tênis Urban',
    image: '/product-thumb-2.png',
    price: 99.9,
    category: 'cat2',
  },
  {
    id: 3,
    name: 'Tênis Branco',
    image: '/product-thumb-3.png',
    price: 150,
    category: 'cat1',
  },
];

const ProductListingPage = () => {
  const [order, setOrder] = useState('menor-preco');
  const [filters, setFilters] = useState([]);

  const categoryOptions = [
    { text: 'Categoria 1', value: 'cat1' },
    { text: 'Categoria 2', value: 'cat2' },
  ];

  const handleFilterChange = (value) => {
    if (filters.includes(value)) {
      setFilters(filters.filter(f => f !== value));
    } else {
      setFilters([...filters, value]);
    }
  };

  const filteredProducts = allProducts.filter(product => {
    if (filters.length === 0) return true;
    return filters.includes(product.category);
  });

<<<<<<< HEAD
  const sortedProducts = filteredProducts.sort((a, b) => {
=======
  const sortedProducts = [...filteredProducts].sort((a, b) => {
>>>>>>> 27f5083 (feat: setup inicial com carrossel animado e correções de layout)
    if (order === 'menor-preco') return a.price - b.price;
    if (order === 'maior-preco') return b.price - a.price;
    return 0;
  });

  return (
    <Layout>
<<<<<<< HEAD
      <div className="flex flex-col lg:flex-row gap-6 px-4 sm:px-6 md:px-8 py-6 w-full">

        <aside className="w-full lg:w-[308px] flex-shrink-0">
          <label htmlFor="order-select" className="block mb-2 text-gray-700 text-sm">
            Ordenar por
          </label>
          <select
            id="order-select"
            className="w-full h-[48px] border border-gray-300 rounded px-3 text-gray-700"
            value={order}
            onChange={e => setOrder(e.target.value)}
          >
            <option value="menor-preco">Menor preço</option>
            <option value="maior-preco">Maior preço</option>
          </select>

          <div className="bg-white mt-6 p-4 border border-gray-200 rounded">
            <h3 className="text-gray-700 text-base font-medium mb-3 border-b pb-2">Filtrar por</h3>
            {categoryOptions.map(({ text, value }) => (
              <div key={value} className="flex items-center mb-2">
=======
      {/* Ajuste de Padding e Layout Responsivo */}
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
>>>>>>> 27f5083 (feat: setup inicial com carrossel animado e correções de layout)
                <input
                  type="checkbox"
                  id={value}
                  checked={filters.includes(value)}
                  onChange={() => handleFilterChange(value)}
<<<<<<< HEAD
                  className="w-5 h-5 accent-pink-600 mr-2"
                />
                <label htmlFor={value} className="text-gray-700 text-sm">{text}</label>
=======
                  className="w-5 h-5 accent-pink-600 mr-3 cursor-pointer"
                />
                <label 
                  htmlFor={value} 
                  className="text-gray-600 text-sm cursor-pointer group-hover:text-pink-600 transition-colors"
                >
                  {text}
                </label>
>>>>>>> 27f5083 (feat: setup inicial com carrossel animado e correções de layout)
              </div>
            ))}
          </div>
        </aside>

<<<<<<< HEAD
        <main className="flex-1 w-full">
          <Section 
            title={`Total de produtos encontrados: ${sortedProducts.length}`} 
            titleAlign="left"
          >
=======
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
            {/* O ajuste de grid-cols-1 deve ser feito dentro deste componente abaixo */}
>>>>>>> 27f5083 (feat: setup inicial com carrossel animado e correções de layout)
            <ProductListingList products={sortedProducts} />
          </Section>
        </main>
      </div>
    </Layout>
  );
};

<<<<<<< HEAD
export default ProductListingPage;
=======
export default ProductListingPage;
>>>>>>> 27f5083 (feat: setup inicial com carrossel animado e correções de layout)
