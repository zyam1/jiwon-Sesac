
import './App.css';
import {BrowserRouter,Routes, Route } from "react-router-dom";
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductsPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductDetailPage from './pages/ProductDetailPage';
import PhotosPage from './pages/PhotosPage';

function App() {
  return (
   <BrowserRouter>
    {/*Routes */}
    <Header />
    <main>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/products' element ={ <ProductPage/>} />
        <Route path='/products/:id' element ={ <ProductDetailPage/>} />
        <Route path='/photos' element ={ <PhotosPage/>} />
        <Route path='*' element ={ <NotFoundPage/>} />
      </Routes>
    </main>
   </BrowserRouter>
  );
}

export default App;
