import React, {useEffect, useState} from 'react'
import {Card, Col , CardGroup, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {Data} from '../Component'
import axios from 'axios';
import Home from '../API'

const ListPokemon = () => {
    const [Pokemon , setPokemon] = useState([])

    useEffect (() => {
        Data();
    },[])

    const Data = () =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon`)
        .then(res => {
        const pokemons = res.data.results;
        setPokemon(pokemons)
      })
    }
    // console.log(props);
    return (
         <CardGroup className = 'App'>
            {
                Pokemon && Pokemon.map(Pokemon =>
                <div>
                    <Col md = {6} xs = {4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Home 
                                    key = {Pokemon.id}
                                    data = {Pokemon}              
                                />
                                <Card.Title>{Pokemon.name}</Card.Title>
                                <Button variant="dark" className = "ml" block>
                                    <Link to={`DetailPokemon/${Pokemon.name}`}>Go to details Pokemon</Link>
                                </Button>
                            </Card.Body>
                        </Card> 
                    </Col>
                </div>
            )}
         </CardGroup>
    );
}

export default ListPokemon;



// export default class ListPokemon extends Component {
//     constructor(props){
//       super(props);
  
//       this.state = {
//         Pokemon: []
//       }
//     }

//     componentDidMount(){
//       axios.get(`https://pokeapi.co/api/v2/pokemon`)
//       .then(res => {
//         // console.log("Variable RES", res);
//         const pokemons = res.data.results;
//         this.setState({
//           Pokemon: pokemons
//         });
//         console.log("HELLO",pokemons);
//       })
//     }
  
//     render(){
//       console.log("THIS IS FROM RENDER SECTION", this.state);
//       const {Pokemon} = this.state
//       return (
//         <div className="App">
//           {/* <NavbarComponent /> */}
//           <div className = "mt-3">
//             <Container fluid>
//               <Row>
//                 {/* <ListPokemon /> */}
//                 <Col className = "ml-8 mr-8">
//                   <h4>
//                     <strong>Nama Pokemon</strong>
//                   </h4>
//                   <hr />
//                   <Row>
//                     {Pokemon && Pokemon.map((data)=> (
//                       <div>
//                         <Data 
//                           key = {data.id}
//                           data = {data}
//                         />
//                         {console.log("DATA",data)}
//                       </div>
//                     ))}
//                   </Row>
//                 </Col>
//                 {/* <Element /> */}
//               </Row>
//             </Container>
//           </div>
//           {/* <ContentComponent /> */}
//         </div>
//       );
//     }
//   }
  