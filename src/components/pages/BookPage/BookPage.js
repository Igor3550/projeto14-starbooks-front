import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBook } from "../../../services/starbooks";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { BookStyle, Button } from "./Bookpage-style";

export default function BookPage() {
	const { idBook } = useParams();
	const [bookData, setBookData] = useState({});

	useEffect(() => {
		getBook(idBook)
			.then((resp) => setBookData(resp.data[0]))
			.catch((err) => console.log(err));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
					<Button>Adicionar ao carrinho</Button>
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
