import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <>
            <div>
                <Link className='btn btn-primary' to="/checkout">
                    Ir a checkout
                </Link>
            </div>
        </>
    )
}

export default Home