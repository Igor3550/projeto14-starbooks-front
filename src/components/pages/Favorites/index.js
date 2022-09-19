import { FavoriteComponent, TitleFavorites } from "./style";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { Product } from "../Homepage/Homepage-style";
import { useEffect, useState, useContext } from "react";
import UserContext from "../../../contexts/UserContext";
import { getFavorites } from "../../../services/starbooks";
import { useNavigate } from "react-router-dom";

export default function FavoritePage() {
	const { user } = useContext(UserContext);
	const [favorites, setFavorites] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		if (!user.token) {
			navigate("/");
			return alert("Faça login para acessar seus favoritos!");
		} else {
			getFavorites(user.token)
				.then((resp) => {
					const aux = resp.data;
					setFavorites(aux);
				})
				.catch((err) => {
					console.log(err);
				});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Header />
			<TitleFavorites>Sua lista de Favoritos:</TitleFavorites>
			<FavoriteComponent>
				{favorites.length > 0
					? favorites.map((el, i) => (
							<Product
								onClick={() => navigate(`/book/${el._id}`)}
								key={`product key${i}`}
							>
								<img src={el.image} alt="book" />
								<h2>{el.title}</h2>
								<p>R${el.price.toFixed(2).toString().replace(/\./, ",")}</p>
							</Product>
					  ))
					: "Ainda não há favoritos"}
			</FavoriteComponent>
			<Footer />
		</>
	);
}
