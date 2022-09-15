import { IconContext } from "react-icons";
import {
	AiOutlineShoppingCart,
	AiOutlineMenu,
	AiFillHeart,
} from "react-icons/ai";
import { FootStyle } from "./Footer-style";

export default function Footer() {
	return (
		<FootStyle>
			<IconContext.Provider value={{ className: "icons" }}>
				<AiFillHeart />
				<AiOutlineShoppingCart />
				<AiOutlineMenu />
			</IconContext.Provider>
		</FootStyle>
	);
}
