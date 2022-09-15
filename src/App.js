import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/Assets/GlobalStyle";
import Homepage from "./components/Homepage/Homepage";
import UserContext from "./context/UserContext";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
	return (
		<>
			<UserContext.Provider value={{}}>
				<Header />
				<BrowserRouter>
					<GlobalStyle />
					<Routes>
						<Route path="/" element={<Homepage />} />
					</Routes>
				</BrowserRouter>
				<Footer />
			</UserContext.Provider>
		</>
	);
}

export default App;
