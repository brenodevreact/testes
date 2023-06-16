import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <h2>Login</h2>

            <Link to={"/"}>
                <button>Home</button>
            </Link>
            <Link to={"/register"}>
                <button>Register</button>
            </Link>
        </div>
    )
}

export default Login

// "https://hamburgueria-kenzie-json-serve.herokuapp.com/products"