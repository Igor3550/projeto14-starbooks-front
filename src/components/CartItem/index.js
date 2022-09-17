import { 
  CartItem,
  LabelArea,
  DescriptionArea
} from "./style";
import { useState } from 'react'

function CartItemComponent ({book, selectedItems, setSelectedItems}) {
  
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
}

export default CartItemComponent;