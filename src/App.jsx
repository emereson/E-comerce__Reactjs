import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/shared/Header'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import RegisterPage from './pages/RegisterPage'
import { getAllProductsThunk } from './store/slices/products.slice'
import LoginPage from './pages/LoginPage'
import { getCartThunk } from './store/slices/Cart.slice'
import ProtectedRoutes from './pages/ProtectedRoutes'
import CartPage from './pages/CartPage'
import PurchasesPage from './pages/PurchasesPage'

function App() {

  const {cart} = useSelector(state => state)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())
    dispatch(getCartThunk())
  }, [])
  
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/user'>
          <Route path='register' element={<RegisterPage  />} />
          <Route path='login' element={<LoginPage  />} />
        </Route>
        {/* Protected Routes*/}
        <Route element={<ProtectedRoutes/>}>
          <Route path='/cart' element={<CartPage/>} />
          <Route path='/purchases' element={<PurchasesPage/>} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
