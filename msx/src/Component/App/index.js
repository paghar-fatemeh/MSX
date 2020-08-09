import React from "react";
import { ThemeProvider } from "styled-components";
import AppGlobalStyle from "./globalStyles";
import { Container, Question } from "./index.style";
import { Provider } from "react-redux";
import store from "../../store";

function App() {
  return (
    <>
      <AppGlobalStyle />
      <ThemeProvider theme={{ size: "medium", mode: "dark" }}>
        <Provider store={store}>
          <Container>
            <Question></Question>
          </Container>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
