import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div>
            <h2>Register</h2>

            <Link to={"/"}>
                <button>Home</button>
            </Link>
            <Link to={"/login"}>
                <button>Login</button>
            </Link>
        </div>
    )
}

export default Register
