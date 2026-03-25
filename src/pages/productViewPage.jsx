import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { FiChevronRight } from 'react-icons/fi';
import Gallery from '../components/imageGallery'; 
import BuyBox from '../components/productInfo';   
import Section from '../components/section';       
import ProductListing from '../components/HomePage/productListing';

const ProductViewPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div className="text-center py-20 font-bold text-xl">Produto não encontrado.</div>;
  }

  // Pega as imagens do array de objetos (conforme o products.js que corrigimos)
  const imageUrls = product.images ? product.images.map(img => img.src) : [product.image];

  // Filtra produtos relacionados (mesma categoria, excluindo o atual)
  const related = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-[#F9F8FE] min-h-screen pb-20">
      <div className="container mx-auto px-4 md:px-20 lg:px-40 py-8">
        
        {/* Breadcrumbs conforme sua lógica */}
        <nav className="flex items-center text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-primary">Home</Link>
          <FiChevronRight className="mx-2" />
          <Link to="/produtos" className="hover:text-primary">Produtos</Link>
          <FiChevronRight className="mx-2" />
          <span className="font-bold text-dark-gray-2">{product.name}</span>
        </nav>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-6 rounded-lg">
          <Gallery images={imageUrls} showThumbs width="700px" height="570px" />
          
          <BuyBox 
            name={product.name}
            reference={product.id}
            stars={4.7} 
            rating={90}
            price={product.price}
            priceDiscount={product.priceDiscount}
            description={product.description || "Descrição padrão do produto Digital Store."}
            product={product}
          />
        </main>

        <div className="mt-20">
          <Section title="Produtos recomendados" titleAlign="left" link={{ text: "Ver todos", href: "/produtos" }}>
            <ProductListing products={related} />
          </Section>
        </div>
      </div>
    </div>
  );
};

export default ProductViewPage;