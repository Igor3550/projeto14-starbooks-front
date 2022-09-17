import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import { useEffect, useState } from 'react'
import {
  Container,
  Cart,
  CartItem,
  LabelArea,
  DescriptionArea,
  FinalizationArea,
  TitleArea,
  MakeOrderButton
} from './style';

const cartItens = [
  {
    id: 1,
    title: 'Spider sei q lá',
    price: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVxowhfNV5sw0lCamjbubAcXaqxRl7KVYW0g&usqp=CAU'
  },
  {
    id: 2,
    title: 'Spider sei q lá 2',
    price: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVxowhfNV5sw0lCamjbubAcXaqxRl7KVYW0g&usqp=CAU'
  },
  {
    id: 3,
    title: 'Spider sei q lá 3',
    price: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVxowhfNV5sw0lCamjbubAcXaqxRl7KVYW0g&usqp=CAU'
  }
]

function CartItemComponent (title, price, image, setSubtotal, subtotal, setSelectedItems, selectedItems ) {

  const [checked, setChecked] = useState(true)

  function handleSetChecked () {
    setChecked(!checked);
    if(checked) {
      setSubtotal(subtotal-price) 
    }else {
      setSubtotal(subtotal+price)
    }
  }

  return (
    <CartItem>
      <input checked={checked} type='checkbox' onClick={handleSetChecked} />
      <img src={image} />
      <LabelArea>
        <DescriptionArea>
          <h1>{title}</h1>
          <p className='inventory' >Em estoque</p>
          <button>Excluir item do carrinho</button>
        </DescriptionArea>
        <h2>R$ {price.toFixed(2).replace('.', ',')}</h2>
      </LabelArea>
    </CartItem>
  )
}

const CartPage = () => {

  const [subtotal, setSubtotal] = useState(0);
  const [userCartItens, setUserCartItems] = useState(cartItens)
  const [selectedItems, setSelectedItems] = useState(0)

  useEffect(() => {

    let aux = 0
    if(userCartItens.length > 0){
      userCartItens.forEach((item) => {
        aux += parseFloat(item.price);
      })
    }
    setSubtotal(aux)
    setSelectedItems(cartItens)
  }, [])

  return (
    <Container>
      <Header />
      <Cart>
        <TitleArea>
          <h1>Carrinho de compras</h1>
        </TitleArea>
        {userCartItens.length > 0 ?
          userCartItens.map((item) => {
            return(
              CartItemComponent(
                item.title, 
                item.price, 
                item.image, 
                setSubtotal, 
                subtotal, 
                setSelectedItems, 
                selectedItems
              )
            )
          })
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