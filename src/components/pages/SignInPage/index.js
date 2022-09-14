import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputComponent from '../../InputComponent';
import ButtonComponent from '../../ButtonComponent';
import {
  Container,
  TitleArea,
  InputArea
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
          <InputComponent 
            placeholder='E-mail' 
            required
            type='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <InputComponent 
            placeholder='Senha' 
            required
            type='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <ButtonComponent>Entrar</ButtonComponent>
        </form>
        <ButtonComponent type='link' onClick={() => navigate('/sign-up')}>Não tem uma conta? Cadastre-se</ButtonComponent>
      </InputArea>
    </Container>
  )
}

export default SignUpPage;