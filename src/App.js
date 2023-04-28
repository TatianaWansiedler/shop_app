import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import HomePage from './pages/HomePage/HomePage';
import AccountPage from './pages/AccountPage/AccountPage';
import ScrollToTop from './helpers/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop/>
      <Header />
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/catalog' element={<CatalogPage/>}/>
          <Route path='/account' element={<AccountPage/>}/>
        </Routes>

      <Footer />
    </div>
  );
}

export default App;
