import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import { useState } from 'react'
import {
  Container,
  Cart,
  CartItem,
  LabelArea,
  DescriptionArea,
  FinalizationArea,
  TitleArea
} from './style';

function CartItemComponent () {

  const [checked, setChecked] = useState(true)

  return (
    <CartItem>
      <input checked={checked} type='checkbox' onClick={() => setChecked(!checked)} />
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVxowhfNV5sw0lCamjbubAcXaqxRl7KVYW0g&usqp=CAU' />
      <LabelArea>
        <DescriptionArea>
          <h1>Homem aranha sei que lá</h1>
          <p className='inventory' >Em estoque</p>
          <button>Excluir item do carrinho</button>
        </DescriptionArea>
        <h2>R$ 2,99</h2>
      </LabelArea>
    </CartItem>
  )
}

const CartPage = () => {

  return (
    <Container>
      <Header />
        <Cart>
          <TitleArea>
            <h1>Carrinho de compras</h1>
          </TitleArea>
          <CartItemComponent />
          <CartItemComponent />
          <CartItemComponent />
          <CartItemComponent />
          <CartItemComponent />
          <CartItemComponent />
        </Cart>
        <FinalizationArea />
      <Footer />
    </Container>
  )
}

export default CartPage;