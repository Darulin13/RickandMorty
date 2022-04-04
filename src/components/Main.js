import React from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.main`
width:100%;
border:solid;
    background-color: rgb(60, 62, 68);  

    `
const api = axios.create({
    baseURL: " https://rickandmortyapi.com/api/character"
})
export default class Main extends React.Component {
    state = {
        listCharacters: [],

    }
    async componentDidMount() {
        const response = await api.get()
        console.log("Main", response.data.results)

        const characters = response.data.resuts.map((item) => {
            return {
                ...item
            }
        })
        this.setState({
            listCharacters: characters
        })

    }
    render() {
        return (
            <Container>
                {this.state.listCharacters.map((item) => (
                    <div key={item.id}><p>{item.name}</p></div>
                    
                ))

                }

            </Container>
        )
    }
}