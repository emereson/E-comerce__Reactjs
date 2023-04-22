import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductInfo from '../components/ProductsPages/ProductInfo'
import SimiarProducts from '../components/ProductsPages/SimiarProducts'
import './styles/similar.css'

const ProductPage = () => {

    const { id } = useParams()

    const [product, setproduct] = useState()

    useEffect(() => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`
        axios.get(url)
            .then(res => setproduct(res.data))
            .catch(err => console.log(err))
    }, [id])


    return (
        <div className='productPage'>
            <ProductInfo
                product={product}
            />
            <SimiarProducts
                category={product?.category}
                productId={product?.id}
            />
        </div>
    )
}

export default ProductPage