import React from "react";
import styled from "styled-components";


const Container = styled.footer`
    background-color: rgb(32, 35, 41);
     color: rgb(158, 158, 158);
     display:flex;
     flex-direction:column;
     justify-content:center;
     align-items:center;
     width:100%;
     padding-bottom:50px;
     padding-top:50px;
    `
const ServerStatus = styled.a`
     line-height:none;
     color: rgb(158, 158, 158);
     font-size:20px;
     padding-bottom:20px;
     text-decoration:none; 

    `
const Info = styled.div`
    width:25%;
    color: rgb(158, 158, 158);
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding-bottom:10px;
    p{
        font-size:20px;
        font-weight:900;
        @media(max-width:1240px){
            padding-bottom:20px;
        }
        
    }
    p:hover{
        color:orange;
    }
    @media(max-width:1240px){
        flex-direction:column; 
    }
    
    
   `
const Develop = styled.p`    
    color: rgb(158, 158, 158);
    width:10%;
    text-align:center;
    @media(max-width:619px){
        width:20%;
    }

    `
const Icon = styled.a`
    width:25%;
    img{
        width:100%;
    }
   `
const Icons = styled.div`
    width:10%;
    color: rgb(158, 158, 158);
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding-bottom:15px;
    @media(max-width:712px){
        width:30%;
    }
   
  `
export default class Footer extends React.Component {
    state = {

    }
    render() {
        return (
            <Container>
                <Info>
                    <p>Characters: { }</p>
                    <p>Locations: { }</p>
                    <p>Episodes: { }</p>

                </Info>
                <ServerStatus href="https://status.rickandmortyapi.com/" target="_blank" > Server status
                </ServerStatus>
                <Icons>
                    <Icon href="" target="_blank" >
                          <img src="https://img.icons8.com/material-outlined/344/github.png"  alt="Github icon" />
                    </Icon>
                    <Icon href="" target="_blank" >
                          <img src=" https://img.icons8.com/ios-glyphs/344/instagram-new.png"  alt="Github icon" />
                    </Icon>
                    <Icon href="" target="_blank" >
                          <img src=" https://img.icons8.com/ios/344/internet--v1.png"  alt="Github icon" />
                    </Icon>
                </Icons>
                <Develop>Developed by João Pedro Ferreira, 2022</Develop>
            </Container>
        )
    }

}