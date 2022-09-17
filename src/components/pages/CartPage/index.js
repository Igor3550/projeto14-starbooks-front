import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from '../../../contexts/UserContext';
import CartItemComponent from '../../CartItem';
import {
  Container,
  Cart,
  FinalizationArea,
  TitleArea,
  MakeOrderButton
} from './style';

/*function CartItemComponent ({book, selectedItems, setSelectedItems}) {
  
  const [checked, setChecked] = useState(true)

  function handleSetChecked () {
    setChecked(!checked);
    if(checked){
      const listItems = selectedItems.filter((item) => item.book._id !== book.book._id);
      setSelectedItems(listItems);
    }else{
      setSelectedItems([...selectedItems, book]);
    }
  }

  return (
    <CartItem>
      <input checked={checked} type='checkbox' onClick={handleSetChecked} />
      <img src={book.book.image} />
      <LabelArea>
        <DescriptionArea>
          <h1>{book.book.title}</h1>
          <p className='inventory' >Em estoque</p>
          <button>Excluir item do carrinho</button>
        </DescriptionArea>
        <h2>R$ {book.book.price.toFixed(2).replace('.', ',')}</h2>
      </LabelArea>
    </CartItem>
  )
}*/

function calculateSubtotal(listItems){
  let aux = 0
  listItems.forEach((item) => {
    aux += parseFloat(item.book.price);
  })
  return aux
}

const CartPage = () => {
  const navigate = useNavigate()

  const { user } = useContext(UserContext);

  const [subtotal, setSubtotal] = useState(0);
  const [selectedItems, setSelectedItems] = useState([])

  useEffect(() => {
    if(!user.token) {
      navigate('/sign-in')
    }
    setSelectedItems(user.cart);
    //setSubtotal(calculateSubtotal(user.cart))
  }, [])
  useEffect(() => {
    setSubtotal(calculateSubtotal(selectedItems))
  }, [selectedItems])

  return (
    <Container>
      <Header />
      <Cart>
        <TitleArea>
          <h1>Carrinho de compras</h1>
        </TitleArea>
        {user.cart ?
          user.cart.map((item) => 
            <CartItemComponent 
              book={item}
              setSelectedItems={setSelectedItems}
              selectedItems={selectedItems}
              setSubtotal={setSubtotal}
            />
          )
          :
          <h2>Nenhum item no carrinho!</h2>
        }
      </Cart>
      <FinalizationArea>
        <div>
          <h2>Subtotal: R$ {subtotal.toFixed(2).replace('.', ',')}</h2>
          <p>({selectedItems.length}) Itens selecionados.</p>
        </div>
        <MakeOrderButton className={selectedItems.length === 0 ? 'disable' : ''} >Fechar pedido</MakeOrderButton>
      </FinalizationArea>
      <Footer />
    </Container>
  )
}

export default CartPage;