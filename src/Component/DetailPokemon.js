import React, {Component} from 'react'
import {Row , Col , Container , Button} from 'react-bootstrap'
import axios from 'axios';
import {Link} from 'react-router-dom'
import Home from '../API'

export default class DetailPokemon extends Component {
    constructor(props){
      super(props);
  
      this.state = {
        Pokemon: [],
        Details: [],
        url :''
      }
      this.getDetails = (urlPokemon) =>{
        console.log("URL",urlPokemon);
        axios.get(urlPokemon)
        .then(res => { 
        //   console.log("Variable RES", res);
          console.log("DETALIS",res.data.results);
          const details = res.data;
          this.setState({
            Details: details,
            url : urlPokemon
          });
        })
      }
    }
    
    componentDidMount(){
      console.log(this.props);
        this.setState({
            Pokemon:this.props.location.data
        });


    }
  
    render(){
      console.log("THIS IS FROM RENDER SECTION", this.props);
      
      const {Pokemon, Details} = this.state
      if(this.state.Details.length==0){
        console.log("MASUK SINI",this.state.Details);
        const detailPokemon=this.getDetails(this.state.Pokemon.url);
      }
      else{
        console.log("MALAH MASUK KESINI", this.state.Details);
        const detailPokemon="";
      }

      // console.log( JSON.stringify(this.state.Details.abilities));
      const abilities = this.state.Details.abilities;
      console.log("ABILITIES", abilities);

      const ability=[];
      
      if(abilities!==undefined){
        abilities.map(function(item, index){
          ability.push(item.ability);
        })
      }

      // console.log("ability",ability[0]);
      
      // console.log(abilities[0]);
      // this.state.Details.abilities.map(function(item, index){
      //   console.log(item, index);
      // })

      return (
        <div className="App">
          <div className = "mt-3">
            <Container fluid>
              <Row>
                {/* <Home 
                  data = {this.state.urlPokemon}
                /> */}
                <Col className = "ml-8 mr-8">
                  <h4>
                    <strong>Nama Pokemon : </strong>
                    {this.state.Details.name}
                    <Button variant="dark" className = "ml-4">
                        <Link to={{
                            pathname: '/'
                        }}>Back to List Pokemon</Link>
                    </Button>
                  </h4>
                  <hr />
                  <h4>
                    <strong>Element : </strong>
                    {this.state.Details.types && this.state.Details.types.map((types)=> (
                      <h5>- {types.type.name}</h5>
                    ))}
                  </h4>
                  <hr />
                  <h4>
                      <strong>Moves : </strong>
                      {this.state.Details.moves && this.state.Details.moves.map((moves)=>(
                        <h5>- {moves.move.name}</h5>
                      ))}
                  </h4>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      );
    }
  }