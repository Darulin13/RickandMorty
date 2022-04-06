import React from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.main`
    width:100%;
    border:solid;
    background-color: rgb(60, 62, 68);  
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    height:450vh;

    div{
        width:95%;  
        display:grid;
        grid-template-columns:50% 50%;
        row-gap: 20px;
        align-content: center;
        justify-items: center
    }
    @media(max-width:1200px){
        display:grid;
        grid-template-columns:1fr;
        
    }
    `

const Box = styled.section`
    width:95%;
    border:solid white;
    display:flex;
    flex-direction:row;
    color:white;
    border-radius:8px;

    img{
 
        width:40%;
     

    }
`
const Info = styled.section`
  
`
const api = axios.create({
    baseURL: " https://rickandmortyapi.com/api/character/?page=19"
})
export default class Main extends React.Component {
    state = {
        listCharacters: [],

    }
    async componentDidMount() {
        const response = await api.get()
        console.log("Main", response.data.results)

        const characters = response.data.results.map((item) => {
            return {
                ...item,
            }
        })
        this.setState({
            listCharacters: characters
        })

    }
    render() {
        return (
            <Container>
                <div>
                    {this.state.listCharacters.map((item) => (
                        <Box>
                            <img src={item.image} alt={item.name} />
                            <Info>
                                <ul>
                                    <h1>{item.name}</h1>
                                    <li>{item.status} - {item.species}</li>
                                </ul>
                                <article>
                                    <h2>Last known location:</h2>
                                    <p>{item.origin.name}</p>
                                </article>
                                <article>
                                    <h2>First seen in:</h2>
                                    <p> {item.location.name}</p>
                                </article>

                            </Info>
                        </Box>


                    ))


                    }       </div>

            </Container>
        )
    }
}