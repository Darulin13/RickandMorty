import React, { Component } from "react";
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    li{
      list-style:none;
    }
  }
`;
class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle/>
        <Header />
         <Main/>
         <Footer/>
      </div>
    )
  }
}
export default App