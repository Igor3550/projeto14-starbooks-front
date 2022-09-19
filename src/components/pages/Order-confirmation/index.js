import UserContext from "../../../contexts/UserContext";
import { useContext, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import { ButtonConfirm, AlignDiv, Form, Order } from "./style";
import { addPurchase, deleteCartItem } from "../../../services/starbooks";
import { useNavigate } from "react-router-dom";

export default function SendOrder({
	selectedItems,
	displayViewOption,
	setDisplayViewOption,
	subtotal,
}) {
	const { user } = useContext(UserContext);
	const [purchase, setPurchase] = useState({});
	const [order, setOrder] = useState({});
	const navigate = useNavigate();

	function OrderData() {
		addPurchase(user.token, purchase)
			.then(alert("Compra realizada com suscesso!"))
			.catch((err) => console.error(err.message));

		for (let i in selectedItems) {
			deleteCartItem(user.token, selectedItems[i].book._id)
				.catch((err) => {
					console.log(err);
				})
				.then(() => {
					navigate("/");
				});
		}
	}

	function AddData(event) {
		event.preventDefault();
		const arr = [];

		for (let i in selectedItems) {
			arr.push(selectedItems[i].book._id);
		}

		setPurchase({
			...order,
			booksIds: arr,
		});
	}

	return (
		<Order style={{ display: displayViewOption ? "block" : "none" }}>
			<IconContext.Provider value={{ className: "icons" }}>
				<AiFillCloseCircle
					onClick={() => {
						setDisplayViewOption(false);
						setPurchase([]);
					}}
				/>
			</IconContext.Provider>
			{purchase.adress ? (
				<>
					<AlignDiv>
						<div>
							<span>Pedido:</span>
							{selectedItems.map((el) => (
								<p>{el.book.title}</p>
							))}
							<span>Endereço:</span>
							<p>{order.adress}</p>
							<span>CEP:</span>
							<p>{order.cep}</p>
							<span>Total: R${subtotal.toFixed(2).replace(".", ",")}</span>
						</div>
						<ButtonConfirm onClick={OrderData}>Confirmar Pedido</ButtonConfirm>
					</AlignDiv>
				</>
			) : (
				<AlignDiv>
					<p>Endereço para entrega: </p>
					<Form onSubmit={AddData}>
						<input
							type="text"
							placeholder="Endereço"
							value={order.adress}
							onChange={(e) => {
								const aux = { ...order };
								aux.adress = e.target.value;
								setOrder(aux);
							}}
						/>
						<input
							type="number"
							placeholder="CEP"
							value={order.cep}
							onChange={(e) => {
								const aux = { ...order };
								aux.cep = e.target.value;
								setOrder(aux);
							}}
						/>
						<ButtonConfirm>User esse Endereço</ButtonConfirm>
					</Form>
				</AlignDiv>
			)}
		</Order>
	);
}
