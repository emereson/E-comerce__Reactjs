import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import defaultValues from '../utils/defaultValues'

const RegisterPage = () => {

    const { register, handleSubmit, reset } = useForm()

    const submit = data => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/users`
        axios.post(url, data)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        reset(defaultValues)

    }
    return (
        <div className='register__container'>
            <form className='register__form' onSubmit={handleSubmit(submit)}>
                <h2>Sign up</h2>
                <div className='register__div'>
                    <label className='register__label' htmlFor="firstName"> First name :</label>
                    <input className='register__input1'{...register('firstName')} type="text" id='firstName' />
                </div>
                <div className='register__div'>
                    <label className='register__label' htmlFor="lastName"> Last name :</label>
                    <input className='register__input2'{...register('lastName')} type="text" id='lastName' />
                </div>
                <div className='register__div'>
                    <label className='register__label' htmlFor="email"> Email :</label>
                    <input className='register__input3' {...register('email')} type="text" id='email' />
                </div>
                <div className='register__div'>
                    <label className='register__label' htmlFor="password">  Password :</label>
                    <input className='register__input4' {...register('password')} type="password" id='password' />
                </div>
                <div className='register__div'>
                    <label className='register__label' htmlFor="phone"> Phone :</label>
                    <input className='register__input5' {...register('phone')} type="number" id='phone' />
                </div>
                <button className='register__btn'>Register</button>
            </form>
        </div>
    )
}

export default RegisterPage