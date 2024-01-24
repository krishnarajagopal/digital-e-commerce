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

export default {getLatestProducts}




  // const getLatestProducts =() => axiosClient.get("/products");
// export default function getLatestProducts() {

//   axios.get(`${api_url}/products`, {
//     headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${api_key}`,
//      }
//      }).then(
//        (res)=>{
//          console.log(res.data)
//        }).catch((err)=>console.log(err))
     








