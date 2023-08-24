import React, { useState, useEffect } from 'react';
import SingleProductCard from '../../components/SingleProductCard/SingleProductCard';
import productService from '../../services/products'
import { useParams } from 'react-router-dom';


const SingleProductPage = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()

    useEffect(() => {
        productService.getProduct(id)
            .then(res => setProduct(res.data))
    }, [])

    return (
        <div>
            <SingleProductCard product={product} />
        </div>
    );
};

export default SingleProductPage;