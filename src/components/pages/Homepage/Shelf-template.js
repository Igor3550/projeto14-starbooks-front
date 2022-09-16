import { useEffect, useState } from "react";
import { getBooks } from "../../../services/starbooks";
import { Shelf, Product } from "./Homepage-style";

import { useNavigate } from "react-router-dom";

export default function SelfTemplate({ genre }) {
	const [books, setBooks] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		getBooks()
			.then((resp) => {
				const booksData = resp.data;
				setBooks(booksData);
			})
			.catch((err) => console.error(err));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<h3>{genre}:</h3>
			<Shelf>
				{books
					.filter((el) => el.genre === genre.toLowerCase())
					.map((el, i) => (
						<Product
							onClick={() => navigate(`/book/${el._id}`)}
							key={`product key${i}`}
						>
							<img src={el.image} alt="book" />
							<h2>{el.title}</h2>
							<p>R${el.price.toFixed(2).toString().replace(/\./, ",")}</p>
						</Product>
					))}
			</Shelf>
		</>
	);
}
