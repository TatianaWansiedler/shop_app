import axios from 'axios'

const PRODUCTS_URL = 'https://whispering-river-87788.herokuapp.com/api/products'
const PRODUCT_URL = 'https://whispering-river-87788.herokuapp.com/api/product/'
const NEW_PRODUCT_URL = 'https://whispering-river-87788.herokuapp.com/api/products?new'
const CATEGORY_URL = 'https://whispering-river-87788.herokuapp.com/api/categories'


const getProducts = () => {
    return axios.get(PRODUCTS_URL)
}

const getProduct = (id) => {
    return axios.get(PRODUCT_URL + id)
}

const getNewProduct = () => {
    return axios.get(NEW_PRODUCT_URL)
}
const getCategory = () => {
    return axios.get(CATEGORY_URL)
}
export default { getProducts, getProduct, getNewProduct }