import React from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.main`
    width:100%;
    background-color: rgb(60, 62, 68);  
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    height:250vh;
  
 
  @media(max-width:1707px){
          height:500vh;
    };
 
  @media(max-width:698px){
    height:780vw;
  }
  @media(max-width: 414px){
    height:830vw;
  }
  @media(max-width:359px){
    height:870vw;
  }
  @media(max-width:340px){
    height:900vw;
  }
  @media(max-width:331px){
    height:1000vw;
  }
  @media(max-width:1248px){
    height:800vw;
  }
  @media(min-width:1708px){
    height:200vw;
  }
   @media(max-width:346px){
        height:879vw;
  };
 



  
  


    div{
        width:88%;  
        display:grid;
        grid-template-columns: repeat(3, 1fr);;
        row-gap: 50px;
        align-content: center;
        justify-items: center;

        @media(max-width:1704px){
            display:grid;
            grid-template-columns: repeat(2, 1fr);
            row-gap: 20px;
            
        }
        @media(max-width:1248px){
            display:grid;
            grid-template-columns: repeat(1, 1fr);;
            row-gap: 10px;
            
        }
    }
   
    `

const Box = styled.section`
    width:95%;
    border:solid white 1px;
    display:flex;
    flex-direction:row;
    color:white;
    justify-content:space-between;
    border-radius:8px;

    img{
        border-radius:8px;
 
        width:40%;
     

    }
`
const Info = styled.section`
    width:58%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;

    li{
        list-style-type: circle;
        list-style-position:inside;
       
    }
    p{
        font-size:04vh;
        @media(max-width:568px){
            font-size:03vh;
        }
    }
    h1{
        font-size:06vh;
        padding-top:10px;
        @media(max-width:630px){
            font-size:03vh;
        }
    }
    h2{
        color:gray;
        font-size:04vh;
        @media(max-width:568px){
            font-size:03vh;
        }
        font-weight:200;
    }
    ul,article{
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
        height:33%;
    
    }
  
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
                                <ul >
                                    <h1>{item.name}</h1>
                                    <li >{item.status} - {item.species}</li>
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