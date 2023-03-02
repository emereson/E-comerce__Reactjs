import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCartThunk } from '../../store/slices/Cart.slice'
import config from '../../utils/getConfig'
import SliderImgs from './SliderImgs'
const ProductInfo = ({ product }) => {
    const [counter, setcounter] = useState(1)

    const handleAdd = () => {
        setcounter(counter + 1)
    }
    const handleMinus = () => {
        if (counter - 1 >= 1) {
            setcounter(counter - 1)
        }
    }

    const dispatch = useDispatch()

    const handleAddCart = () => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
        const data = {
            quantity: counter,
            productId: product.id
        }

        axios.post(url, data, config)
            .then(res => {
                console.log(res.data)
                dispatch(getCartThunk())
                setcounter(1)
            })
            .catch(err => console.log(err.response))
    }

    return (
        <article className='productIinfo__article'>
            <div className='productIinfo__container'>
                {/* <div className='productIinfo__conatiner-img'>
                    <img className='productIinfo__img' src={product?.images[0].url} alt="" />
                </div> */}
                <SliderImgs
                    product={product}
                />
                <div className='productIinfo__div-descrption'>
                    <h3 className='productIinfo__bran'>{product?.brand}</h3>
                    <h2 className='productIinfo__title'>{product?.title}</h2>
                </div>
                <p className='productIinfo__description'>{product?.description}</p>
            </div>
            <footer className='productIinfo__footer'>
                <section className='productIinfo__section'>
                    <h4 className='productIinfo__h4-price'>price : </h4>
                    <span className='productIinfo__price'>{product?.price}</span>
                </section>
                <section className='productIinfo__section2'>
                    <h4 className='productIinfo__h4-quantity'>Quantity :</h4>
                    <div className='productIinfo__funciones'>
                        <div className='productIinfo__minus' onClick={handleMinus}>-</div>
                        <div className='productIinfo__counter'>{counter}</div>
                        <div className='productIinfo__add' onClick={handleAdd}>+</div>
                    </div>
                </section>
                <button className='productIinfo__btn' onClick={handleAddCart}>
                    <i className='bx bx-cart'></i>
                </button>
            </footer>
        </article>
    )
}

export default ProductInfo