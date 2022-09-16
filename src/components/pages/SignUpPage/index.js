import InputComponent from '../../InputComponent';
import ButtonComponent from '../../ButtonComponent';
import { signUp } from '../../../services/starbooks';
import { IconContext } from 'react-icons';
import { GiSpellBook } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  Container,
  TitleArea,
  InputArea
} from './style';

const SignUpPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  function handleSubmit (e) {
    e.preventDefault();
    if(password !== confirmPassword) return alert('As senhas devem ser idênticas!')
    const body = {
      name,
      email,
      password
    }
    const promise = signUp(body);
    promise.catch((error) => {
      console.log(error);
      if(error.response.status === 400){
        alert("E-mail já cadastrado!");
      }else{
        alert(`Ocorreu um erro inesperado: ${error.message}`)
      }
    })
    promise.then((res) => {
      console.log(res.data);
      setEmail('');
      setPassword('');
      setName('');
      setConfirmPassword('');
      alert('Usuário cadastrado com sucesso!')
      navigate('/sign-in')
    })
  }

  return (
    <Container>
      <TitleArea>
        <IconContext.Provider value={{ className: "icons" }}>
          <GiSpellBook className='icon' />
        </IconContext.Provider>
        <h1>StarBooks</h1>
      </TitleArea>
      <InputArea>
        <form onSubmit={handleSubmit}>
        <InputComponent 
            placeholder='Seu nome' 
            required
            type='text'
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
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
          <InputComponent 
            placeholder='Confirme a senha' 
            required
            type='password'
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
          />
          <ButtonComponent>Entrar</ButtonComponent>
        </form>
        <ButtonComponent type='link' onClick={() => navigate('/sign-in')}>Já tem uma conta? Faça login</ButtonComponent>
      </InputArea>
    </Container>
  )
}

export default SignUpPage;