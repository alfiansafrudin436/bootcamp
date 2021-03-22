import axios from 'axios';
import React, {createContext, useContext, useState} from 'react';
import api from '../services/api';
const ProductContext = createContext();

const ProductProvider = ({children}) => {
  const [error, setError] = useState(null);
  const [product, setProduct] = useState({});

  const getData = async (token) => {
    await axios
      .get(`${api}/api/v1/product`,{
        headers:{
          'Authorization':`Bearer ${token}`
        }
      })
      .then((res) => {
        console.log({res});
        setProduct(res.data.data);
      })
      .catch((err) => {
        console.log({err});
        setError(err);
      });
  };

  const value = {
    product,
    error,
    getData,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
export const useProduct = () => useContext(ProductContext);
export default ProductProvider;
