import React from "react";
import styled from "styled-components";

const Container = styled.header`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;

    div{
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
        align-items:center;
     
    }
    @media(max-width:1052px){
        div{
        border-bottom: 1px gray solid;
    }
    }


    `
    
const Title = styled.h1`
    color:rgb(60, 62, 68);
    font-size:8vw;
    font-weight:900;
    padding-bottom:5vw;
    padding-top:5vw;
    
 
` 
 
    
const NavegationBar = styled.nav`
    width:95%;    

    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding-bottom:1vw;
    padding-top:1vw;

    ul{
        list-style:none;
        width:25%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
    }
    li{
        font-size:2vw;
        font-weight:900;
        width:35%;
    }
    li:hover{
        color:orange;
    }
    button:hover{
        background-color:orange;
        color:white;
    }
    button{
        border:orange 1px solid;
        background-color:transparent;
        font-size:1.4vw;
        font-weight:900;
        border-radius:8px;
        width:40%;
        padding:6px;
    }
    img{
        width:20%;
    }

    @media(max-width:1052px){
        width:95%;    
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
        padding-bottom:1vw;
        padding-top:1vw;
     
        ul{
            width:40%;      
        }
        li{
            font-size:4vh;
             font-weight:900;
             width:35%;
         

        }
        button{
            width:20%;
        
        }
    }
    @media(max-width:582px){
       ul{ 
           width:50%; 
         }  
         li{
            width:45%; 

         }  
         button{
            width:10%;
            background-color:orange;
        }

    }


`

export default class Header extends React.Component {
    render() {
        return (
            <Container>
                <div>
                <NavegationBar>
                    <img src="" alt="logo" />
                    <ul>
                        <li>Docs</li>
                        <li>About</li>
                        <button>Help us</button>
                    </ul>
                </NavegationBar>
                </div>
                <Title>The Rick and Morty API</Title>
            </Container>

        )
    }
}