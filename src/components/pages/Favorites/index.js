import { FavoriteComponent } from "./style";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { Product } from "../Homepage/Homepage-style";

export default function FavoritePage() {
	return (
		<>
			<Header />
			<FavoriteComponent>Livros</FavoriteComponent>
			<Footer />
		</>
	);
}
