import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./contexts/UserContext";
import { Container } from "./components/Assets/styles/appStyle";
import GlobalStyle from "./components/Assets/styles/GlobalStyle";
import SignUpPage from "./components/pages/SignUpPage";
import SignInPage from "./components/pages/SignInPage";
import Homepage from "./components/pages/Homepage/Homepage";
import CartPage from "./components/pages/CartPage";
import BookPage from "./components/pages/BookPage/BookPage";
import SendOrder from "./components/pages/Order-confirmation";
import SideBar from "./components/Sidebar";
import FavoritePage from "./components/pages/Favorites";

function App() {
	const [user, setUser] = useState({});
	const [disable, setDisable] = useState(false);

	return (
		<Container>
			<GlobalStyle />
			<UserContext.Provider value={{ user, setUser, disable, setDisable }}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/sign-in" element={<SignInPage />} />
						<Route path="/sign-up" element={<SignUpPage />} />
						<Route path="/book/:idBook" element={<BookPage />} />
						<Route path="/cart" element={<CartPage />} />
						<Route path="/order-confirmation" element={<SendOrder />} />
						<Route path="/favorites" element={<FavoritePage />} />
					</Routes>
					<SideBar />
				</BrowserRouter>
			</UserContext.Provider>
		</Container>
	);
}

export default App;
