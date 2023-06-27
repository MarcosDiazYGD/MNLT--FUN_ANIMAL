import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Signin = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const user = { username, email, password }
  const navigate = useNavigate()


  const submit = () => {
    axios.post('http://localhost:8000/api/v1/users', user)
      .then(res => {
        console.log(res)
        navigate('/')
      }).catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="Signing FullScreen">
      <div className="container__login">
        <input className="input-center" type="text" placeholder="Name" value={username} onChange={e => setUsername(e.target.value)} />
        <input className="input-center" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="input-center" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

        <button onClick={submit}>Enviar</button>
        <Link to='/login'>Ya tienes una cuenta</Link>
      </div>
    </div>
  )
}

export default Signin