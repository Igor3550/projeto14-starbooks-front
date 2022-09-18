import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getBook, addItemToCart } from "../../../services/starbooks";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { BookStyle, Button } from "./Bookpage-style";
import UserContext from "../../../contexts/UserContext";

export default function BookPage() {
	const { user } = useContext(UserContext)
	const { idBook } = useParams();
	const [bookData, setBookData] = useState({});

	useEffect(() => {
		getBook(idBook)
			.then((resp) => setBookData(resp.data[0]))
			.catch((err) => console.log(err));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function handleAddToCart (){
		if(!user.token){
			return alert('Faça login para adicionar itens ao seu carrinho!');
		}
		const promise = addItemToCart(user.token, idBook);
		promise.catch((error) => {
			console.log(error);
			if(error.response.status === 409) {
				alert('Item já existente no carrinho!')
			}else {
				alert(`Ocorreu um erro: ${error.message}`)
			}
		})
		promise.then((res) => {
			alert('Item adicionado ao carrinho com sucesso!')
		})
	}

	return (
		<>
			<Header />
			<BookStyle>
				<div>
					<h2>{bookData.title}</h2>
					<p>{bookData.autor}</p>
					<img src={bookData.image} alt="book" />
					<span>
						R${Number(bookData.price).toFixed(2).toString().replace(/\./, ",")}
					</span>
					<Button onClick={handleAddToCart}>Adicionar ao carrinho</Button>
					<Button>Adicionar aos Favoritos</Button>
				</div>
				<div>
					<h3>Informações adicionais:</h3>
					<p>
						<span>Editora</span>:{bookData.publisher}
					</p>
					<p>
						<span>Data de edição:</span>:{bookData.publication}
					</p>
					<p>
						<span>Língua</span>:{bookData.language}
					</p>
					<p>
						<span>Número de páginas</span>:{bookData.pages}
					</p>
					<p>
						<span>ISBN</span>:{bookData.ISBN}
					</p>
					<p>
						<span>Dimensões</span>:{bookData.dimensions}
					</p>
					<p>
						<span>Tradutor(es)</span>:{bookData.translators}
					</p>
					<p>
						<span>Descrição</span>:{bookData.description}
					</p>
				</div>
			</BookStyle>
			<Footer />
		</>
	);
}
