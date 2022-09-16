import { PageStyle } from "./Homepage-style";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import ShelfTemplate from "./Shelf-template";

export default function Homepage() {
	const genres = [
		"Programação",
		"Horror",
		"Romance",
		"Fantasia",
		"Comic",
		"Manga",
	];

	return (
		<>
			<Header />
			<PageStyle>
				{genres.map((el, i) => (
					<ShelfTemplate genre={el} key={`shelf key ${i}`} />
				))}
			</PageStyle>
			<Footer />
		</>
	);
}
