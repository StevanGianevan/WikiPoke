import React, {Component} from 'react'
import {Row , Col , Container} from 'react-bootstrap'
import {Data} from '../Component'
import axios from 'axios';

export default class ListPokemon extends Component {
    constructor(props){
      super(props);
  
      this.state = {
        Pokemon: []
      }
    }

    componentDidMount(){
      axios.get(`https://pokeapi.co/api/v2/pokemon`)
      .then(res => {
        // console.log("Variable RES", res);
        const pokemons = res.data.results;
        this.setState({
          Pokemon: pokemons
        });
        console.log("HELLO",pokemons);
      })
    }
  
    render(){
      console.log("THIS IS FROM RENDER SECTION", this.state);
      const {Pokemon} = this.state
      return (
        <div className="App">
          {/* <NavbarComponent /> */}
          <div className = "mt-3">
            <Container fluid>
              <Row>
                {/* <ListPokemon /> */}
                <Col className = "ml-8 mr-8">
                  <h4>
                    <strong>Nama Pokemon</strong>
                  </h4>
                  <hr />
                  <Row>
                    {Pokemon && Pokemon.map((data)=> (
                      <div>
                        <Data 
                          key = {data.id}
                          data = {data}
                        />
                        {console.log("DATA",data)}
                      </div>
                    ))}
                  </Row>
                </Col>
                {/* <Element /> */}
              </Row>
            </Container>
          </div>
          {/* <ContentComponent /> */}
        </div>
      );
    }
  }
  