import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCartThunk } from '../../store/slices/Cart.slice'
import config from '../../utils/getConfig'
import '../../pages/styles/cardProduct.css'

const CardProduct = ({product}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = () => {
        navigate(`/product/${product.id}`)
    }

    const handleBtnClick = e => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
        const data = {
            quantity: 1,
            productId: product.id
        }

        axios.post(url,data, config)
        .then(res => {
            console.log(res.data)
            dispatch(getCartThunk())
        })
        .catch(err => {
            console.log(err.response)
            if (err.response.data.error = 'Product already added to cart') {
            }
        
        })
        e.stopPropagation()
    }

    return (
        <article className='cardProduct__article' onClick={handleClick}>
            <header className='cardProduct__header' >
                <img className='cardProduct__img1'  src={product.images[0].url} alt="" />
                {/* <img className='cardProduct__img2'  src={product.images[1].url} alt="" /> */}
            </header>
            <section className='cardProduct__section' >
                <header className='cardProduct__section-header' >
                    <h3 className='cardProduct__h3' >{product.brand}</h3>
                    <h2 className='cardProduct__h2' >{product.title}</h2>
                </header>
                <div className='cardProduct__div-price' >
                    <span className='cardProduct__span-price' >Price:</span>
                    <div className='cardProduct__price' >{product.price}</div>
                </div>
                <button className='cardProduct__button'  onClick={handleBtnClick}>
                <i className='bx bxs-cart-add'></i>
                </button>
            </section>

        </article>
    )
}

export default CardProduct