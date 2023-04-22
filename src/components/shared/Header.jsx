import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartPage from '../../pages/CartPage'
import '../../pages/styles/header.css'
import { setOpenClose } from '../../store/slices/toogleCcart.slice'

const Header = () => {
    const [modal, setmodal] = useState(true)

    const { openClose } = useSelector(state => state)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setOpenClose(!openClose))
    }
    const handleOpen = () => {
        setmodal(false)
    }
    const handleclose = e => {
        setmodal(true)
        dispatch(setOpenClose(true))
    }


    let token = localStorage.getItem('token')
    return (
        <header className='nav__header'>
            <h1 className='nav_title'>
                <Link to='/'>e-commerce</Link>
            </h1>
            {modal ?
                <i onClick={handleOpen} className='bx bx-menu'></i>
                :
                <i onClick={handleclose} className='bx bxs-x-circle'></i>
            }
            <nav className={modal ? 'modal' : 'nav__navigation'}>
                <ul className='nav__ul'>
                    <li ><Link className='nav__li' to='/user/login'>Login</Link></li>
                    <li ><Link className='nav__li' to='/purchases'>Purchases</Link></li>
                    <li onClick={handleClick} ><Link className='nav__li' to={token ? '#' : '/cart'}>Cart</Link></li>
                </ul>
            </nav>

            <CartPage />




        </header>
    )
}

export default Header