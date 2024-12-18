import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const SuccessPage = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [result, setResult] = useState(null)
    
    const payment_id = searchParams.get("payment_id")
    const status = searchParams.get("status")
    const external_reference = searchParams.get("external_reference")
    const payment_type = searchParams.get("payment_type")


    useEffect(() => {
        console.log(searchParams)
        console.log(payment_id)
        console.log(status)
        console.log(external_reference)
        console.log(payment_type)

        updateOrderPayment()

    }, [])


    const updateOrderPayment = () => {
        fetch('http://127.0.0.1:5000/api/update-order', {
            method: 'POST',
            body: JSON.stringify({
                payment_id,
                status,
                external_reference,
                payment_type
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                setResult(responseJson)
            })
    }


    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 py-4">
                    <div className={`alert alert-${result?.status}`}>
                        {result?.message}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessPage