import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CartItem } from '../components/CartPages/CartItem'
import { getCartThunk } from '../store/slices/Cart.slice'
import config from '../utils/getConfig'

const CartPage = () => {

    const [totalPrice, settotalPrice] = useState(0)

    const { cart, openClose} = useSelector(state => state)
    
    useEffect(() => {
        const result = cart?.reduce((acc,cv) => acc + cv.quantity * Number(cv.product.price), 0)
        settotalPrice(result)
    }, [cart])
    
    const dispatch = useDispatch()
    
    const handlePurchase = () => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
        
        axios.post (url,{},config)
        .then(res => {
            dispatch(getCartThunk(res.data))
            
        })
        .catch(err => console.log(err.response))
    }
    
    let token = localStorage.getItem('token')
    
    return (
        <div className={ openClose? 'cart__close' : 'cart__container' && token? 'cart__container':'cart__close'}>
            <div className='cart__container-info'>
                {
                    cart?.map(prodInfo => (
                        <CartItem
                            key={prodInfo.id}
                            prodInfo={prodInfo}
                        />
                    ))
                }
            </div>
            <footer className='cart__footer'>
                <h2><span className='cartTolal__span1'>Total:</span> <span className='cartTolal__span1'>{totalPrice}</span></h2>
                <button className='cartTolal__btn' onClick={handlePurchase}>Buy this cart</button>
            </footer>
        </div>
    )
}

export default CartPage