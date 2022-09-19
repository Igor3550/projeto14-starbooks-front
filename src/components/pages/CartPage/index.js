import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../../contexts/UserContext";
import CartItemComponent from "../../CartItem";
import { getUserCart } from "../../../services/starbooks";
import SendOrder from "../Order-confirmation";
import {
	Container,
	Cart,
	FinalizationArea,
	TitleArea,
	MakeOrderButton,
} from "./style";

function calculateSubtotal(listItems) {
	let aux = 0;
	listItems.forEach((item) => {
		aux += parseFloat(item.book.price);
	});
	return aux;
}

const CartPage = () => {
	const navigate = useNavigate();

	const { user, setUser } = useContext(UserContext);

	const [subtotal, setSubtotal] = useState(0);
	const [selectedItems, setSelectedItems] = useState([]);
	const [displayViewOption, setDisplayViewOption] = useState(false);

	useEffect(() => {
		if (!user.token) {
			navigate("/sign-in");
			return alert("Faça login para visualizar seu carrinho!");
		} else {
			setSelectedItems(user.cart);
			getCartList();
		}
	}, []);
	useEffect(() => {
		setSubtotal(calculateSubtotal(selectedItems));
	}, [selectedItems]);

	function getCartList() {
		const promise = getUserCart(user.token);
		promise.catch((error) => {
			console.log(error);
			alert(`Ocorreu um erro ao buscar dados do carrinho: ${error.message}`);
		});
		promise.then((res) => {
			const aux = { ...user };
			setUser({
				...aux,
				cart: res.data,
			});
			setSelectedItems(res.data);
		});
	}

	return (
		<Container>
			<Header />
			<Cart>
				<TitleArea>
					<h1>Carrinho de compras</h1>
				</TitleArea>
				{!user.cart ? (
					<h2>Nenhum item no carrinho!</h2>
				) : (
					user.cart.map((item) => (
						<CartItemComponent
							book={item}
							setSelectedItems={setSelectedItems}
							selectedItems={selectedItems}
							setSubtotal={setSubtotal}
							getCartList={getCartList}
						/>
					))
				)}
			</Cart>
			<FinalizationArea>
				<div>
					<h2>Subtotal: R${subtotal.toFixed(2).replace(".", ",")}</h2>
					<p>({selectedItems.length}) Itens selecionados.</p>
				</div>
				<MakeOrderButton
					className={selectedItems.length === 0 ? "disable" : ""}
					onClick={() =>
						selectedItems.length === 0 ? "" : setDisplayViewOption(true)
					}
				>
					Fechar pedido
				</MakeOrderButton>
			</FinalizationArea>
			<SendOrder
				displayViewOption={displayViewOption}
				selectedItems={selectedItems}
				setDisplayViewOption={setDisplayViewOption}
				subtotal={subtotal}
			/>
			<Footer />
		</Container>
	);
};

export default CartPage;
