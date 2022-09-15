import { PageStyle, Product } from "./Homepage-style";
import books from "./products-teste";

export default function Homepage() {
	return (
		<>
			<PageStyle>
				{books.map((el) => (
					<Product>
						<img src={el.image} alt="book" />
						<h2>{el.title}</h2>
						<p>R${el.price.toFixed(2).toString().replace(/\./, ",")}</p>
					</Product>
				))}
			</PageStyle>
		</>
	);
}
