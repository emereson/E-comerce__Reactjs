import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../home/CardProduct'

const SimiarProducts = ({category ,productId}) => {
    const [filterProducts, setfilterProducts] = useState()

    const {products} = useSelector (state => state)

    useEffect(() => {
        if (category && products){
        setfilterProducts(products?.filter(product => product.category.id === category.id && product.id !== productId))
        }
    }, [category, products])
    

    return (
        <div className='similiarProducts__container'>
            <h2 className='similiarProducts__h2'>Discover similar products</h2>
            <div className='similiarProducts__cardProducts'>
                {
                    filterProducts?.map(prod =>(
                        <CardProduct
                            key= {prod.id}
                            product = {prod}
                            />
                        )
                    )
                }
            </div>
        </div>
    )
}

export default SimiarProducts