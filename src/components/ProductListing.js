import React, { useEffect } from 'react'
import axios from 'axios'
import {setProduct} from '../redux/actions/productActions'
import ProductComponents from './ProductComponents'
import { useDispatch } from 'react-redux'
const ProductListing = () => {
  const dispatch=useDispatch();
  const fetchProducts=async ()=>{
    const response=await axios.get('https://fakestoreapi.com/products').catch(err=> console.log(err));
    dispatch(setProduct(response.data));
  }
  useEffect(()=>{
    fetchProducts();
  },[])
  
  return (
    <div className='ui grid container'>
       <ProductComponents/>
    </div>
  )
}

export default ProductListing