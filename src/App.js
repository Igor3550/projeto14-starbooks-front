import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "./styles/appStyle";
import GlobalStyle from "./styles/GlobalStyle";
import SignUpPage from "./components/pages/SignUpPage";
import SignInPage from "./components/pages/SignInPage";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignInPage />} />
          <Route path='/sign-up' element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
