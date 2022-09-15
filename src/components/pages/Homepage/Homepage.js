import { PageStyle, Product } from "./Homepage-style";
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import books from "./products-teste";

export default function Homepage() {
	return (
		<>
			<Header />
			<PageStyle>
				{books.map((el) => (
					<Product>
						<img src={el.image} alt="book" />
						<h2>{el.title}</h2>
						<p>R${el.price.toFixed(2).toString().replace(/\./, ",")}</p>
					</Product>
				))}
			</PageStyle>
			<Footer/>
		</>
	);
}
