import { PageStyle, Product, Shelf } from "./Homepage-style";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import ShelfTemplate from "./Shelf-template";

export default function Homepage() {
	const genres = [
		"Romance",
		"Fantasia",
		"Terror",
		"Programação",
		"Comic",
		"Manga",
	];

	return (
		<>
			<Header />
			<PageStyle>
				{genres.map((el, i) => (
					<ShelfTemplate genre={el.toLowerCase()} key={`shelf key ${i}`} />
				))}
			</PageStyle>
			<Footer />
		</>
	);
}
