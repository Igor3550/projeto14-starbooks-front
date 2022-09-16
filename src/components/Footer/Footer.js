import { IconContext } from "react-icons";
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

	return (
		<FootStyle>
			<IconContext.Provider value={{ className: "icons" }}>
				<AiFillHome onClick={() => navigate("/")} />
				<AiFillHeart />
				<AiOutlineShoppingCart />
				<AiOutlineMenu />
			</IconContext.Provider>
		</FootStyle>
	);
}
