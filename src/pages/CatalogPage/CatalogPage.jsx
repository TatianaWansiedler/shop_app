import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Filter from '../../components/Filter/Filter';
import Info from '../../components/Info/Info';
import Product from '../../components/Product/Product';
import styles from './catalogpage.module.css';
import productService from '../../services/products';
import ReactPaginate from 'react-paginate';


const CatalogPage = () => {
  const [products, setProducts] = useState([])
  const [itemsPerPage, setTtemsPerPage] = useState(4)
  const [productView, setProductView] = useState('4')
  const [sort, setSort] = useState('price-down')
  const [itemOffset, setItemOffset] = useState(0) 
  const [forcePage, setForcePage] = useState(0)
  
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(1).slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setForcePage(event.selected)
    setItemOffset(newOffset);
  };

  useEffect(()=>{
    productService
      .getProducts()
      .then(res => {
        const sortedByPrice = res.data.sort((a,b)=> a.price - b.price)
        setProducts(sortedByPrice)
      })
  },[])

  useEffect(() => {
    if (sort === 'price-down'){
      const sortedByPrice = [...products].sort((a,b)=> a.price - b.price)
      setProducts(sortedByPrice)
    } 
    else if(sort === 'price-up'){
      const sortedByPrice = [...products].sort((a,b)=> b.price - a.price)
      setProducts(sortedByPrice)
    } 
    else if (sort === 'newest') {
      const sortedByDate = [...products].sort((a,b)=> new Date(b.createdAt) - new Date(a.createdAt))
      setProducts(sortedByDate)
    }
    setForcePage(0)
    setItemOffset(0);
  },[sort])

  return (
    <div>
      <Breadcrumbs title='Shop'/>
      <Filter 
        setProductView={setProductView} 
        sort={sort} setSort={setSort} 
        setTtemsPerPage={setTtemsPerPage}
        itemsPerPage={itemsPerPage}
      />
      <div className={styles["products-wrapper"]}>
        {
          currentItems.map(el => 
          <Product 
            key={el._id} 
            {...el}
            productView={productView}
          />)
        }
      </div>
      <ReactPaginate
          forcePage={forcePage}
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel=""
          renderOnZeroPageCount={null}
          containerClassName={styles["pagination-wrapper"]}
          pageLinkClassName = {styles["pagination-page"]}
          nextClassName={styles["pagination-next"]}
          activeLinkClassName={styles["pagination-active"]}
        />
      <Info />
    </div>
  );
};

export default CatalogPage;
