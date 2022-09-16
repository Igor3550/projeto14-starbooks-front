import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBook } from "../../../services/starbooks";

export default function BookPage() {
	const { idBook } = useParams();
	const [bookData, setBookData] = useState({});

	useEffect(() => {
		getBook(idBook)
			.then((resp) => setBookData(resp.data[0]))
			.catch((err) => console.log(err));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	console.log(bookData);

	return (
		<>
			<img src={bookData.image} alt="book" />
		</>
	);
}
