import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from './contexts/UserContext'
import { Container } from "./styles/appStyle";
import GlobalStyle from "./styles/GlobalStyle";
import SignUpPage from "./components/pages/SignUpPage";
import SignInPage from "./components/pages/SignInPage";

function App() {
  const [user, setUser] = useState({})

  return (
    <Container>
      <GlobalStyle />
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignInPage />} />
            <Route path='/sign-up' element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </Container>
  );
}

export default App;
