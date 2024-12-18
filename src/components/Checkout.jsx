import React, { useState } from 'react'
import { SiMercadopago } from "react-icons/si";

const Checkout = () => {
    const [loading, setLoading] = useState(false)

    const handlePayment = async () => {
        try {
            setLoading(true)

            const response = await fetch('http://127.0.0.1:5000/api/create-preference', {
                method: 'POST',
                body: JSON.stringify({
                    items: [
                        {
                            product_id: 4,
                            quantity: 3,
                            price: 4
                        }
                    ],
                    user_id: 1
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await response.json()

            if (data.init_point){

                window.location.href = data.init_point

            } else {
                console.log('error al crear la preferencia', data)
            }

        } catch (error) {
            console.log(error.message)
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
        <div>CheckOut</div>
        <h3>Checkout con MercadoPago</h3>
        <button 
            onClick={handlePayment}
            disabled={loading}
            style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#009EE3",
                color: "white",
                border: "none",
                cursor: "pointer"
            }}
        >
          <SiMercadopago size={32} />  { loading ? " Procesando... " : " Pagar Ahora "  }
        </button>
        </>
    )
}

export default Checkout