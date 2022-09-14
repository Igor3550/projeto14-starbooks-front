import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  TitleArea,
  InputArea,
  Input,
  Button
} from './style'

const SignUpPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit (e) {
    e.preventDefault();
    const body = {
      email,
      password
    }
    console.log(body)
    setEmail('');
    setPassword('')
  }

  return (
    <Container>
      <TitleArea>
        <h1>StarBooks</h1>
      </TitleArea>
      <InputArea>
        <form onSubmit={handleSubmit}>
          <Input 
            placeholder='E-mail' 
            required
            type='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <Input 
            placeholder='Senha' 
            required
            type='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <Button>Entrar</Button>
        </form>
        <Button type='link' onClick={() => navigate('/sign-up')}>Não tem uma conta? Cadastre-se</Button>
      </InputArea>
    </Container>
  )
}

export default SignUpPage;