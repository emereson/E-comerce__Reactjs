import axios from 'axios'
import React, { useEffect, useState } from 'react'
import config from '../utils/getConfig'
import PurchasesCard from '../components/PurchasesPage/PurchasesCard'
import CartPage from './CartPage'
import './styles/purchasesPage.css'

const PurchasesPage = () => {

    const [purchases, setpurchases] = useState()

    useEffect(() => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
        axios.get(url,config)
        .then(res => setpurchases(res.data))
        .catch(err => console.log(err.respone))
    }, [])
    
    return (
        <div>
            <div className='purchasesPage__conainer'>
                {
                    purchases?.map(purchase => (
                        <PurchasesCard
                        key={purchase.id}
                        purchase = {purchase}
                        />
                    ))
                }
            </div>
        </div>

    )
}

export default PurchasesPage