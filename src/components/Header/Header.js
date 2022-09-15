import { HeaderStyle } from "./Header-style";
import { IconContext } from "react-icons";
import { GiSpellBook } from "react-icons/gi";

export default function Header() {
	return (
		<HeaderStyle>
			<IconContext.Provider value={{ className: "icons" }}>
				<GiSpellBook />
			</IconContext.Provider>
			<h1>StarBooks</h1>
		</HeaderStyle>
	);
}
