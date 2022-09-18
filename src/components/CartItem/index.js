import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import { deleteCartItem } from '../../services/starbooks';
import { 
  CartItem,
  LabelArea,
  DescriptionArea
} from "./style";

function CartItemComponent ({book, selectedItems, setSelectedItems, getCartList}) {
  const navigate = useNavigate()

  const { user } = useContext(UserContext)
  
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

  function handleDeleteItem () {
    const deleteConfirmation = window.confirm("Deseja excluir este item?");
    if(!deleteConfirmation) return;
    const promise = deleteCartItem(user.token, book.bookId)
    promise.catch((error) => {
      console.log(error)
      alert(`Ouve um erro: ${error.message}`)
    })
    promise.then((res) => {
      alert("Item excluído do carrinho!");
      getCartList()
    })
  }

  return (
    <CartItem>
      <input checked={checked} type='checkbox' onClick={handleSetChecked} />
      <img src={book.book.image} />
      <LabelArea>
        <DescriptionArea>
          <h1>{book.book.title}</h1>
          <p className='inventory' >Em estoque</p>
          <button onClick={handleDeleteItem}>Excluir item do carrinho</button>
        </DescriptionArea>
        <h2>R$ {book.book.price.toFixed(2).replace('.', ',')}</h2>
      </LabelArea>
    </CartItem>
  )
}

export default CartItemComponent;