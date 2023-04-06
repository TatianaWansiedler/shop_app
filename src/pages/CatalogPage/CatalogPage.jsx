import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Filter from '../../components/Filter/Filter';
import Info from '../../components/Info/Info';
import Product from '../../components/Product/Product';
import styles from './catalogpage.module.css';
import productService from '../../services/products';

const CatalogPage = () => {
  const [products, setProducts] = useState([])
  // const [gridView, setGridView] = useState(true)
  const [productView, setProductView] = useState('4')
  const [sort, setSort] = useState('')

  useEffect(()=>{
    productService
      .getProducts()
      .then(res => {
        const sortedByPrice = res.data.sort((a,b)=> a.price - b.price)
        setProducts(sortedByPrice)
      })
  },[])

  useEffect(()=> {

    if (sort==='price-down'){
      const sortedByPrice = [...products].sort((a,b)=> a.price - b.price)
      setProducts(sortedByPrice)
    } 
    else if(sort==='price-up'){
      const sortedByPrice = [...products].sort((a,b)=> b.price - a.price)
      setProducts(sortedByPrice)
    } 
    else if (sort==='newest') {
      const sortedByDate = [...products].sort((a,b)=> new Date(b.createdAt) - new Date(a.createdAt))
      setProducts(sortedByDate)
    }
  },[sort])


  return (
    <div>
      <Breadcrumbs title='Shop'/>
      <Filter setProductView={setProductView} sort={sort} setSort={setSort}/>
      <div className={styles["products-wrapper"]}>
        {
          products.map(el=> 
          <Product 
            key={el._id} 
            {...el}
            productView={productView}
          />)
        }
      </div>
      <Info />
    </div>
  );
};

export default CatalogPage;


// Добавить в Filter еще одну иконку. 
//     Модифицировать код таким образом, чтобы при нажатии на эту инонку отображалось по два элемента
//       в одной строке.

//   Добавить сортировку по цене от большей к меньшей цене