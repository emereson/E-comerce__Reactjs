import React, { useState } from 'react'

const SliderImgs = ({ product }) => {
    const [imgSelected, setimgSelected] = useState(0)

    const styleMovent = {
        transform: `translateX(calc(-${imgSelected}/3 * 100%))`,
        width: `${product?.images.length * 100}%`
    }
    const handlePrevius = () => {
        if (imgSelected - 1 < 0) {
            setimgSelected(product.images.length - 1)
        } else {
            setimgSelected(imgSelected - 1)
        }
    }
    const handleNext = () => {
        if (imgSelected + 1 > product.images.length - 1) {
            setimgSelected(0)
        } else {
            setimgSelected(imgSelected + 1)
        }
    }
    return (
        <div className='slider__container'>
            <div className='slider'>
                <button onClick={handlePrevius} className='slider__btn sliderbtn__left'><i className='bx bx-chevron-left'></i></button>
                <div style={styleMovent} className='slider__movement'>
                    {
                        product?.images.map(image => (
                            <div key={image.id} className='slider__container-img'>
                                <img src={image.url} className='slider__img' alt="" />
                            </div>
                        ))
                    }
                </div>
                <button onClick={handleNext} className='slider__btn sliderbtn__right'><i className='bx bx-chevron-right'></i></button>
            </div>
            <div className='carousel__container'>
                {
                    product?.images.map((image,index )=> (
                        <div key={image.id} className={`'carousel__container-img' ${index === imgSelected && 'active-img'}`} onClick={() => setimgSelected(index)}>
                            <img src={image.url} className='carousel__img' alt="" />
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default SliderImgs