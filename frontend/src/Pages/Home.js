import { useEffect } from 'react'

//redux
import { useDispatch , useSelector } from 'react-redux'
import { productListAction } from '../action/productAction';
//css
import style from './Home.module.css'
import Products from '../Component/Products/Products';



const Home = () => {
  
  const dispatch = useDispatch()

  const productList = useSelector((state)=>state.productList)
  const {loading , product} = productList

  useEffect(()=>{
    dispatch(productListAction())
  },[dispatch])


  return (
    <>
      <h1 className={style.header}>Page Home</h1>
      <hr/>
      {loading ? <h1>درحال بارگیری ...</h1> : <Products products={product}/> }
    </>
  );
}

export default Home;