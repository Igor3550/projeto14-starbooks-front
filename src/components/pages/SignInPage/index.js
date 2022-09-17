import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn, getUserCart } from '../../../services/starbooks';
import InputComponent from '../../InputComponent';
import ButtonComponent from '../../ButtonComponent';
import UserContext from '../../../contexts/UserContext';
import { IconContext } from 'react-icons';
import { GiSpellBook } from 'react-icons/gi'
import {
  Container,
  TitleArea,
  InputArea
} from './style'

const SignUpPage = () => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit (e) {
    e.preventDefault();
    const body = {
      email,
      password
    }

    const promise = signIn(body);
    promise.catch((error) => {
      console.log(error);
      if(error.response.status === 422){
        alert("Usuário e/ou senha incorreto(s)!");
      }else{
        alert(`Ocorreu um erro inesperado: ${error.message}`)
      }
    })
    promise.then((res) => {
      console.log(res.data);
      const token = res.data

      setUser({
        token
      })
      
      const promiseCart = getUserCart(res.data);
      promiseCart.catch((error) => {
        console.log(error);
        alert(`Erro ao buscar dados do carrinho: ${error.message}`)
      })
      promiseCart.then((res) => {
        setUser({
          cart: res.data,
          token
        })
      })
      setEmail('');
      setPassword('');
      navigate('/');
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