import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import axios from "axios"
import {Link} from 'react-router-dom'
import loginStyles from '../css/login.module.css'
import AppStyles from '../css/app.module.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const userCredentials = {email, password}
  const navigate = useNavigate()

  const submit = () => {
    axios.post('http://localhost:8000/api/v1/auth/login', userCredentials)
    
    .then( res => {
      console.log(res)
      navigate('/pets')
      localStorage.setItem('token', res.data.data)
    }).catch(error =>{
      console.log(error)
    })
  }

  return(
    <div className={AppStyles.FullScreen}>
      <div className={loginStyles.container__login}>
        <input className={loginStyles.input_center} type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input className={loginStyles.input_center} type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

        <button className={loginStyles.button} onClick={submit}>Enviar</button>
        <Link to='/signup'>crear una cuenta</Link>
      </div>
    </div> 
  )
}

export default Login