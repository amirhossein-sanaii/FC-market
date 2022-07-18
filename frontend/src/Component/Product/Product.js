import {React , useEffect} from 'react'
import { useParams } from 'react-router-dom'

//redux
import { useDispatch , useSelector } from 'react-redux'
import { productDetailAction } from '../../action/productAction';

//component
import View from './View';


const Product = () => {
  
  const { id } = useParams()


  const dispatch = useDispatch()

  const productDetail = useSelector((state)=>state.productDetail)
  const {loading , product} = productDetail

  useEffect(()=>{
    dispatch(productDetailAction(id))
  },[dispatch , id])


  return (
    <>
      <View
        product={product}
      />
    </>
  )
}

export default Product