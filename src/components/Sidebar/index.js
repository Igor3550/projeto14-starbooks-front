import { SideBarComponent } from "./style";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import { ButtonConfirm } from "../pages/Order-confirmation/style";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
	const { disable, setDisable, user, setUser } = useContext(UserContext);
	const navigate = useNavigate();

	return (
		<SideBarComponent style={{ display: disable ? "block" : "none" }}>
			<IconContext.Provider value={{ className: "icons" }}>
				<AiFillCloseCircle
					onClick={() => {
						setDisable(false);
					}}
				/>
			</IconContext.Provider>
			{user.token ? (
				<div>
					<h2>Bem-vindo, {user.userData.name}!</h2>
					<p>Boas Compras!</p>
					<ButtonConfirm
						onClick={() => {
							setUser({});
							navigate("/");
							setDisable(false);
						}}
					>
						Logout
					</ButtonConfirm>
				</div>
			) : (
				<div>
					<h2>Bem-vindo, anônimo! </h2>
					<p>Boas compras!</p>
					<ButtonConfirm
						onClick={() => {
							navigate("/sign-in");
							setDisable(false);
						}}
					>
						Login
					</ButtonConfirm>
					<ButtonConfirm
						onClick={() => {
							navigate("/sign-up");
							setDisable(false);
						}}
					>
						Registrar
					</ButtonConfirm>
				</div>
			)}
		</SideBarComponent>
	);
}
