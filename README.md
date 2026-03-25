# 🛍️ Digital Store

Projeto de uma loja virtual desenvolvido com **React.js**, com foco em componentização, organização e boas práticas de front-end.

---

## Sobre o Projeto

A **Digital Store** é uma aplicação web que simula uma loja virtual completa, permitindo:

- Visualização de produtos  
- Filtro e ordenação  
- Página de detalhes do produto  
- Interface moderna e responsiva  
- Navegação entre páginas  


## Tecnologias Utilizadas

- React.js  
- React Router DOM  
- JavaScript (ES6+)  
- HTML5  
- CSS3  

## Estrutura de Pastas

src/
├── components/
│ ├── Header/
│ ├── Footer/
│ ├── Logo/
│ ├── ProductListing/
│ ├── ProductCard/
│ ├── ProductOptions/
│ ├── BuyBox/
│ ├── Section/
│ ├── FilterGroup/
│ └── Gallery/
│
├── pages/
│ ├── HomePage/
│ ├── ProductListingPage/
│ └── ProductViewPage/
│
├── assets/
├── App.js
└── index.js

## 🎨 Paleta de Cores

### Cores principais

- Primary: `#C92071`  
- Secondary: `#B5B6F2`  
- Tertiary: `#991956`  

### Feedback

- Error: `#EE4266`  
- Success: `#52CA76`  
- Warning: `#F6AA1C`  

### Escala de Cinza

- Dark Gray: `#1F1F1F`  
- Dark Gray 2: `#474747`  
- Dark Gray 3: `#666666`  
- Light Gray: `#8F8F8F`  
- Light Gray 2: `#CCCCCC`  
- Light Gray 3: `#F5F5F5`  
- White: `#FFFFFF`  


## Componentes

### Layout
Responsável por estruturar as páginas com:

- `<Header />`
- Conteúdo (`children`)
- `<Footer />`

### Header
- Logo  
- Campo de busca  
- Login / Cadastro  
- Carrinho  
- Navegação principal  

### Footer
- Logo  
- Descrição  
- Redes sociais  
- Links dinâmicos  
- Direitos autorais  

### Section
Componente reutilizável com:
- Título  
- Alinhamento  
- Link opcional  
- Conteúdo dinâmico  

### ProductCard
Exibe:
- Imagem  
- Nome  
- Preço  
- Desconto  

### ProductListing
Lista vários produtos usando `<ProductCard />`

### Gallery
Carrossel com:
- Navegação por setas  
- Miniaturas (opcional)  
- Slides interativos  

### FilterGroup
- Checkbox ou radio  
- Renderização dinâmica  

### BuyBox
- Nome  
- Preço  
- Avaliações  
- Descrição  
- Botão de compra  

### ProductOptions
- Seleção de cores  
- Seleção de tamanhos  

## Páginas

### Home (`/`)
- Banner (Gallery)  
- Coleções  
- Produtos em alta  

### Produtos (`/products`)
- Listagem  
- Filtros  
- Ordenação  

### Produto (`/product/:id`)
- Galeria  
- Informações  
- Opções  
- Produtos recomendados  

### Funcionalidades

- Busca de produtos  
- Filtros  
- Ordenação  
- Galeria interativa  
- Página detalhada  
- Navegação com rotas  

## Como Executar

### 1. Clonar repositório
```bash
git clone https://github.com/seu-usuario/digital-store.git
```
```bash
2. Entrar na pasta
cd digital-store
```
```bash
3. Instalar dependências
npm install
```
```bash
4. Rodar projeto
npm start
```

### Rotas
/ → Home
/products → Listagem
/product/:id → Detalhes

## Boas Práticas
* Componentização
* Reutilização
* Código organizado
* Estrutura escalável
  
### Imagens

Localizadas em:
public/
src/assets/

### Autores
Realizamos nosso projeto junto com a Nazaré Almeida.
Grupo: Tatiana dos Santos Lima, Mickaelly da Silva Costa e Kassia Moreira Santos.
