import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CardProduct from '../components/home/CardProduct'
import { getAllProductsThunk, searchProductThunk } from '../store/slices/products.slice'
import './styles/home.css'

const Home = () => {

    const [categories, setcategories] = useState()
    const [fromTo, setfromTo] = useState({
        from: 0,
        to: Infinity
    })

    const { products } = useSelector(state => state)

    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        const input = (e.target.inputSearch.value.trim().toLowerCase())
        dispatch(searchProductThunk(input, false))
    }

    useEffect(() => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories'
        axios.get(url)
            .then(res => setcategories(res.data))
            .catch(err => console.log(err.response))

    }, [])

    const handleClickCategory = id => {
        dispatch(searchProductThunk(id, true))
    }

    const hamdleSubmitPrice = e => {
        e.preventDefault()
        const from = Number(e.target.from.value.trim())
        const to = Number(e.target.to.value.trim())


        if (from && to) {
            setfromTo({ from, to })
        } else if (from && to) {
            setfromTo({ from, to: Infinity })
        } else if (!from && to) {
            setfromTo({ from: 0, to })
        } else {
            setfromTo({ from: 0, to: Infinity })
        }
    }
    const filterProduct = product => +product.price >= fromTo.from && +product.price <= fromTo.to

    return (
        <div className='container'>
            <form className='home__form' onSubmit={handleSubmit}>
                <input className='homeForm_input' id='inputSearch' type="text" />
                <button className='homeForm_btn'>
                    <i className='bx bx-search-alt'></i>
                </button>
            </form>
            <div className='home__category'>
                <section>
                    <header className='homeCategory__header'>
                        <h3 className='homeCategory__h3'>Price <i className='bx bx-chevron-down' ></i></h3>
                    </header>
                    <form className='formFilter__price' onSubmit={hamdleSubmitPrice}>
                        <div className='formFilter__div'>
                            <label className='formFilte__label' htmlFor="from">From :</label>
                            <input className='formFilte__input' type="number" id='from' />
                        </div>
                        <div className='formFilter__div'>
                            <label className='formFilte__label' htmlFor="to">To :</label>
                            <input className='formFilte__input' type="number" id='to' />
                        </div>
                        <button className='formFilte__btn'>Filter Price</button>
                    </form>
                </section>
                <article >
                    <header className='homeCategory__header'>
                        <h3 className='homeCategory__h3'>Category <i className='bx bx-chevron-down' ></i></h3>
                    </header>
                    <ul className='homeCategory__ul'>
                        <li onClick={() => dispatch(getAllProductsThunk())} className='homeCategory__li'>All products</li>
                        {
                            categories?.map(category => (
                                <li className='homeCategory__li' key={category.id} onClick={() => handleClickCategory(category.id)}>{category.name}</li>
                            ))
                        }
                    </ul>
                </article>
            </div>
            <div className='home__conatiner'>
                {
                    products?.length === 0 ?
                        <h1>❌This products is not exists❌</h1>
                        :
                        products?.filter(filterProduct).map(product => (
                            <CardProduct
                                key={product.id}
                                product={product}
                            />
                        ))
                }
            </div>
            <div className='dates'>
                <h1>Creado Por Emerson Wilson</h1>
                <h2> Contact me :</h2>
                <ul className='dates__ul'>

                    <li className='dates__li' ><Link to="https://github.com/emereson"><i className=' icon__date bx bxl-github'></i></Link></li>
                    <li className='dates__li'><Link to="https://www.linkedin.com/in/emerson-yujra-997b52260/"><i className=' icon__date bx bxl-linkedin' ></i></Link></li>
                    <li className='dates__li'><Link to="https://app.netlify.com/teams/emereson/overview"><i className=' icon__date bx bxl-netlify' ></i></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Home