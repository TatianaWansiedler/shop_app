import axios from 'axios'

// const PRODUCTS_URL = 'https://whispering-river-87788.herokuapp.com/api/products'
const PRODUCTS_URL = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=30'
// const PRODUCT_URL = 'https://whispering-river-87788.herokuapp.com/api/product/'
const PRODUCT_URL = 'https://api.escuelajs.co/api/v1/products/'
// const NEW_PRODUCT_URL = 'https://whispering-river-87788.herokuapp.com/api/products?new'
const NEW_PRODUCT_URL = 'https://api.escuelajs.co/api/v1/products?offset=31&limit=100'



const getProducts = () => {
    return axios.get(PRODUCTS_URL)
}

const getProduct = (id) => {
    return axios.get(PRODUCT_URL + id)
}

const getNewProduct = () => {
    return axios.get(NEW_PRODUCT_URL)
}

export default { getProducts, getProduct, getNewProduct }