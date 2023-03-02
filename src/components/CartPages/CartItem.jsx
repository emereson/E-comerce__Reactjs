import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getCartThunk } from '../../store/slices/Cart.slice'
import config from '../../utils/getConfig'
import '../../pages/styles/cartItem.css'

export const CartItem = ({ prodInfo }) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${prodInfo.id}`

        axios.delete(url, config)
            .then(res => {
                console.log(res.data)
                dispatch(getCartThunk())
            })
            .catch(err => console.log(err.response))

    }
    return (
            <article className='cart__article'>
                <header className='cart__header'>
                    <img className='cart__image' src={prodInfo.product.images[0].url} alt="" />
                </header>
                <div className='cart__info'>
                    <h4 className='cart__marca'>{prodInfo.product.brand}</h4>
                    <h3 className='cart__name'>{prodInfo.product.title}</h3>
                    <ul className='cart__ul'>
                        <li className='cart__li'>
                            <span className='cart__span'>Unit Price : </span>
                            <span className='cart__span2'>{prodInfo.product.price}</span>
                        </li>
                        <li className='cart__li'>
                            <span className='cart__span'>Quantity : </span>
                            <span className='cart__span2'>{prodInfo.quantity}</span>
                        </li>
                    </ul >
                    <button className='cart__btn' onClick={handleDelete}>
                        <i className='bx bx-trash'></i>
                    </button>
                </div>
            </article>
    )
}
