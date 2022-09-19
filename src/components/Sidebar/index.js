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
					<ButtonConfirm
						onClick={() => {
							setUser({});
							setDisable(false);
						}}
					>
						Logout
					</ButtonConfirm>
				</div>
			) : (
				<div>
					<ButtonConfirm
						onClick={() => {
							navigate("/sign-in");
							setDisable(false);
						}}
					>
						Login/Register
					</ButtonConfirm>
				</div>
			)}
		</SideBarComponent>
	);
}
