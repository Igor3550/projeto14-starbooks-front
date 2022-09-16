import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from './contexts/UserContext'
import { Container } from "./components/Assets/styles/appStyle";
import GlobalStyle from "./components/Assets/styles/GlobalStyle";
import SignUpPage from "./components/pages/SignUpPage";
import SignInPage from "./components/pages/SignInPage";
import Homepage from "./components/pages/Homepage/Homepage";
import CartPage from "./components/pages/CartPage";

function App() {
  const [user, setUser] = useState({})

  return (
    <Container>
      <GlobalStyle />
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
						<Route path="/" element={<Homepage />} />
            <Route path='/sign-in' element={<SignInPage />} /> 
            <Route path='/sign-up' element={<SignUpPage />} />
            <Route path='/cart' element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </Container>
  );
}

export default App;
