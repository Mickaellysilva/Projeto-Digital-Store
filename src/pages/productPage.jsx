import React, { useState, useMemo, useEffect } from 'react'; 
import { products } from '../data/products';
import ProductListingList from '../components/AbaProdutos/productListingList';
import { Link, useLocation } from 'react-router-dom';

const ProductPage = () => {
  const [order, setOrder] = useState('menor-preco');
  const [filters, setFilters] = useState([]);
  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  // Extraímos os parâmetros da URL
  const categoryFromUrl = searchParams.get('categoria')?.toLowerCase() || '';
  const searchQuery = searchParams.get('filter')?.toLowerCase() || '';

  // Efeito para definir o filtro inicial baseado na URL (ex: quando clica num card da Home)
  useEffect(() => {
    if (categoryFromUrl) {
      const capitalizedCategory = categoryFromUrl.charAt(0).toUpperCase() + categoryFromUrl.slice(1);
      // Evita duplicar se já estiver nos filtros
      setFilters(prev => prev.includes(capitalizedCategory) ? prev : [capitalizedCategory]);
    }
  }, [categoryFromUrl]);

  const allFilters = [
    { label: 'Marca', options: ['Adidas', 'Balenciaga', 'K-Swiss', 'Nike', 'Puma', 'Stamp', 'OQVestir', 'JBL', 'MST'] },
    { label: 'Categoria', options: ['Camisetas', 'Calças', 'Bonés', 'Headphones', 'Tênis'] },
    { label: 'Gênero', options: ['Masculino', 'Feminino', 'Unisex'] },
    { label: 'Estado', options: ['Novo', 'Usado'] },
  ];

  const handleFilterChange = (value) => {
    setFilters((prev) =>
      prev.includes(value) ? prev.filter((f) => f !== value) : [...prev, value]
    );
  };

  // Lógica unificada de filtragem e ordenação
  const processedProducts = useMemo(() => {
    let result = products.filter((product) => {
      const title = product.title?.toLowerCase() || '';
      const category = product.category?.toLowerCase() || '';

      const matchesSearch = !searchQuery || title.includes(searchQuery) || category.includes(searchQuery);

      const matchesFilter = filters.length === 0 || filters.some((f) => {
        return (
          product.category === f || 
          product.brand === f || 
          product.gender === f || 
          product.condition === f
        );
      });

      return matchesSearch && matchesFilter;
    });

    // Ordenação (criando cópia para não mutar o original)
    const sorted = [...result];
    if (order === 'menor-preco') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (order === 'maior-preco') {
      sorted.sort((a, b) => b.price - a.price);
    }

    return sorted;
  }, [filters, searchQuery, order]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 px-4 sm:px-6 md:px-10 py-6 w-full bg-gray-50">
      
      {/* Barra Lateral de Filtros */}
      <aside className="w-full lg:w-[280px] flex-shrink-0">
        <h3 className="text-gray-700 text-[16px] font-semibold mb-4">Filtrar por:</h3>
        {allFilters.map((filter) => (
          <div key={filter.label} className="mb-6">
            <h4 className="text-xs text-gray-600 font-semibold mb-2 uppercase tracking-wider">{filter.label}</h4>
            <div className="flex flex-col gap-2">
              {filter.options.map((option) => (
                <label key={option} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-pink-600">
                  <input
                    type="checkbox"
                    checked={filters.includes(option)}
                    onChange={() => handleFilterChange(option)}
                    className="w-4 h-4 accent-pink-500 rounded"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 w-full">
          <span className="text-sm text-gray-500">
            {filters.length === 0 ? (
              <>Todos os produtos – <strong>{processedProducts.length}</strong> produto(s)</>
            ) : (
              <>Resultados para <strong>{filters.join(', ')}</strong> – <strong>{processedProducts.length}</strong> produto(s)</>
            )}
          </span>
          
          <div className="flex items-center gap-2 ml-auto">
            <label htmlFor="order" className="text-sm text-gray-600">Ordenar por:</label>
            <select
              id="order"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
              className="h-[40px] border border-gray-300 rounded px-3 text-sm focus:ring-1 focus:ring-pink-500 outline-none bg-white"
            >
              <option value="menor-preco">Menor preço</option>
              <option value="maior-preco">Maior preço</option>
            </select>
          </div>
        </div>

        {/* Lista de Produtos */}
        <ProductListingList products={processedProducts} />

        {/* Botão para finalizar */}
        <div className="flex justify-end mt-10 w-full border-t pt-6">
          <Link to="/pedidos" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-3 bg-pink-700 hover:bg-pink-800 text-white font-semibold rounded shadow-md transition-all active:scale-95">
              Ir para o carrinho
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;