import {React} from 'react'
import { Link } from 'react-router-dom'



//css 
import style from './Products.module.css'

const Product = ({products}) => {
  return (
    <>
    <div className={style.divparent}>

    
    {products.map((item,index)=>{
        return(
            <div key={index} className={`Card ${style.card}`}>
                <img alt='image' className={style.imageproducts} src={item.image} />
                <Link to={`product/${item._id}`}>
                    {item.name}
                </Link>
                <p>
                    {item.description}
                </p>
                <h5>{item.price}</h5>
            </div>
        )
    })}

    </div>

    </>
  )
}

export default Product