import React from 'react'

const purchasesCard = ({ purchase }) => {
    return (
        <article className='purchasesCard__article'>
            <header className='purchasesCard__header'>
                <img className='purchasesCard__img' src={purchase.product.images[0].url} alt="" />
            </header>
            <div className='purchasesCard__info' >
                <h3 className='purchasesCard__h3'>{purchase.product.title}</h3>
                <div className='purchasesCard__quantity'>
                    <p className='purchasesCard__quantity-p'>Quantity : {purchase.quantity}</p>
                    <p className='purchasesCard__quantity-p'>Price : {purchase.product.price}</p>
                </div>
            </div>
        </article>
    )
}

export default purchasesCard