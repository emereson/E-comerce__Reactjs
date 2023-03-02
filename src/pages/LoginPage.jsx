import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import defaultValues from '../utils/defaultValues'
import '../pages/styles/loginPage.css'

const loginPage = () => {
    const [token, settoken] = useState(null)

    const { register, handleSubmit, reset } = useForm()

    const submit = data => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
        axios.post(url, data)
            .then(res => {
                console.log(res.data)
                settoken(res.data.token)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('name', `${res.data.user.firstName} ${res.data.user.lastName}`)
            })
            .catch(res => console.log(err))
        reset(defaultValues)
    }

    const handleClick = () => {
        localStorage.clear()
        settoken()
    }

    if (localStorage.getItem('name')) {
        return (

            <div className='logged__page'>
                <div className='logged__container' >
                    <img className='logged__img' src='../../iconUser.png' alt="" />
                    <h2 className='logged__welcome'> Welcome </h2>
                    <h2 className='logged__name' > {localStorage.getItem('name')}</h2>
                    <button className='logged__btn-logout' onClick={handleClick}>Logout</button>
                </div>
            </div>
        )

    } else {

    }
    return (
        <div className='logIn__page'>
            <div className='logIn__container'>
                <form className='logIn__form' onSubmit={handleSubmit(submit)}>
                    <h2 className='logIn__h2' >Login</h2>
                    <div className='logIn__container-email'>
                        <label className='logIn__email' htmlFor="email">Email :</label>
                        <input className='logIn__input-email' {...register('email')} type="text" id='email' />
                    </div>
                    <div className='logIn__container-password'>
                        <label className='logIn__password' htmlFor="password">Password :</label>
                        <input className='logIn__input' {...register('password')} type="password" id='password' />
                    </div>
                    <button className='logIn__btn'>Login</button>
                </form>
                <button className='logIn__btn-register'>
                    <Link to='/user/register'>Register</Link>
                </button>
            </div>
        </div>
    )
}

export default loginPage