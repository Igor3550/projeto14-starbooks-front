import { IconContext } from "react-icons";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import {
	AiOutlineShoppingCart,
	AiOutlineMenu,
	AiFillHeart,
	AiFillHome,
} from "react-icons/ai";
import { FootStyle } from "./Footer-style";
import { useNavigate } from "react-router-dom";

export default function Footer() {
	const navigate = useNavigate();
	const { setDisable } = useContext(UserContext);

	return (
		<FootStyle>
			<IconContext.Provider value={{ className: "icons" }}>
				<AiFillHome onClick={() => navigate("/")} />
				<AiFillHeart onClick={() => navigate("/favorites")} />
				<AiOutlineShoppingCart onClick={() => navigate("/cart")} />
				<AiOutlineMenu onClick={() => setDisable(true)} />
			</IconContext.Provider>
		</FootStyle>
	);
}
