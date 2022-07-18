import Footer from "./Component/Footer/Footer"
import Header from "./Component/Header/Header"

import { Routes , Route } from 'react-router-dom'


//css
import style from './App.module.css'


//Pages
import Home from "./Pages/Home"
import Product from "./Component/Product/Product"



const App = ()=>{
  return (
    <>
          <Header/>
            <main className={`${style.main} py-3`}>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="product/:id" element={<Product/>}/>
              </Routes>
            </main>
          <Footer/>

    </>
  )
}

export default App