import {FaUser} from 'react-icons/fa'
import React, {useState, useEffect, useContext} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link'
import Layout from '@/components/Layout'
import styles from '@/styles/AuthForm.module.css'
import AuthContext from '@/context/AuthContext';

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {login, error} = useContext(AuthContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(email, password)
        login({email, password})
    }

    useEffect(()=>{
        error && toast.error(error)
    })
    return (
        <Layout >
            <div className={styles.auth}> 
                <h1>
                    <FaUser /> Log In
                </h1>
                <ToastContainer />
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email"> Email Address </label>
                        <input type="email" id="email" value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password"> password </label>
                        <input type="password" id="password" value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        />
                    </div>
                    <input type="submit" value="Login" className="btn" />
                </form>

                <p>
                    Don't have an account ? <Link href='/account/register'>
                        Register
                    </Link>
                </p>
            </div>
        </Layout>
    )
}
