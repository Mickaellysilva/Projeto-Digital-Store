import Header from '../components/header';
import Footer from '../components/footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

<<<<<<< HEAD
export default Layout;
=======
export default Layout;
>>>>>>> 27f5083 (feat: setup inicial com carrossel animado e correções de layout)
