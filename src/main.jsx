import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { CartProvider } from './contexts/cartContext';
<<<<<<< HEAD
import App from './App';
=======
import App from './app';
>>>>>>> 27f5083 (feat: setup inicial com carrossel animado e correções de layout)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <CartProvider>
      <App />
     </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
<<<<<<< HEAD
);
=======
);


>>>>>>> 27f5083 (feat: setup inicial com carrossel animado e correções de layout)
