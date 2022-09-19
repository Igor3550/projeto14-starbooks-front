import UserContext from "../../../contexts/UserContext";
import { useContext, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import { ButtonConfirm, AlignDiv, Form, Order } from "./style";

export default function SendOrder({
	selectedItems,
	displayViewOption,
	setDisplayViewOption,
	subtotal,
}) {
	const { user } = useContext(UserContext);
	const [final, setFinal] = useState({});
	const [order, setOrder] = useState({});

	function OrderData() {
		console.log(final);
	}

	function AddData(event) {
		event.preventDefault();
		const arr = [];

		for (let i in selectedItems) {
			arr.push(selectedItems[i].book);
		}

		setFinal({
			...order,
			token: user.token,
			books: arr,
			userId: selectedItems[0].userId,
		});
	}

	return (
		<Order style={{ display: displayViewOption ? "block" : "none" }}>
			<IconContext.Provider value={{ className: "icons" }}>
				<AiFillCloseCircle
					onClick={() => {
						setDisplayViewOption(false);
						setFinal([]);
					}}
				/>
			</IconContext.Provider>
			{final.adress ? (
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
							<span>Total: {subtotal}</span>
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
