const {default:axios} = require('axios');

const api_key = process.env.NEXT_PUBLIC_REST_API_KEY;

const api_url = 'http://127.0.0.1:1337/api';

  const axiosClient = axios.create({
  baseURL: api_url,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${api_key}`,
  }

  });

const getLatestProducts =() => axiosClient.get("/products?populate=*");

const getProductById = (id) => axiosClient.get(`/products/${id}?populate=*`);

const getProductsByCategory = (category) => axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`);

// Add to cart collection
const addToCart = (data) => axiosClient.post("/carts", data);

// Get user cart items

const getCartItems = (email) => axiosClient.get(`/carts?populate[products][populate][0]=banner&filters[email][$eq]=${email}`);


// Delete user cart items
const deleteCartItem=(id)=>axiosClient.delete(`/carts/${id}`)
//Create order
const createOrder=(data)=>axiosClient.post('/orders',data)

export default {
	getLatestProducts,
	getProductById,
	getProductsByCategory,
	addToCart,
	getCartItems,
	deleteCartItem,
	createOrder,
};




  // const getLatestProducts =() => axiosClient.get("/products");
// export default function getLatestProducts() {

//   axios.get(`${api_url}/products`, {
//     headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${api_key}`,
//      }
//      }).then(
//        (res)=>{
//          console.log(res.data)
//        }).catch((err)=>console.log(err))
     








