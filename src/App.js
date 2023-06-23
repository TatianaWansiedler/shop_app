import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import HomePage from './pages/HomePage/HomePage';
import AccountPage from './pages/AccountPage/AccountPage';
import ScrollToTop from './helpers/ScrollToTop';
import { useSelector } from 'react-redux';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage';
import CartPage from './pages/CartPage/CartPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

function App() {
  const user = useSelector(({user})=> user.currentUser)
  return (
    <div className="App">
      <ScrollToTop/>
      <Header />
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/catalog' element={<CatalogPage/>}/>
          <Route path='/catalog/:id' element={<SingleProductPage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/checkout' element={<CheckoutPage/>}/>
          {
            !user && <Route path='/account' element={<AccountPage/>}/>
          }
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
