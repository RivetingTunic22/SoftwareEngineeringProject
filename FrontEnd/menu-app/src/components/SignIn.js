import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function SignIn() {
    const [toMenu, setToMenu] = useState(false)
    const [toLanding] = useState()
    const navigate = useNavigate()

    if (toMenu === true) {
        return <Navigate to='/menu' />
    } 
    if (toLanding === true) {
        return <Navigate to='/' />
    }
    return (
    <form>
        <div>
            <h1>Sign into you account</h1>
                <div>
                    <label>
                    Email:
                    </label>
                    <input
                    type="email"
                    name="email" />
                </div>
                <div>
                    <label>
                    Password:
                    </label>
                    <input
                    type="password"
                    name="password" />
                </div>
                <input onClick={() => setToMenu(() => !toMenu)} type="button" value='SignIn' />
                <input onClick={() => navigate('/')} type='button' value='Home' />
            </div>
        </form>
    )
}

export default SignIn