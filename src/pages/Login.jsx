import { useRef, useState } from "react"
import { postLogin } from "../app/userApi"
import { useDispatch } from "react-redux"
import { setToken } from "../app/userSlice"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const dispatch = useDispatch()
    const form = useRef()
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        const userInfo = {
            email: form.current[0].value,
            password: form.current[1].value
        }

        postLogin(userInfo)
            .then(data => {
                if (data.body) {
                    dispatch(setToken(data.body.token))
                    navigate('/profile')
                } else {
                    setError(data.message)
                }
            }).catch(error => setError(error.message || error))
    }

    return (
        <main className="bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form ref={form} onSubmit={e => handleSubmit(e)}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me
                        </label>
                    </div>
                    <button className="sign-in-button">Sign In</button>
                </form>
                <p>{error}</p>
            </section>
        </main>
    )
}

export default Login