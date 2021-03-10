import React , {Component} from 'react';
import { Row , Container , Col} from 'react-bootstrap';
import './App.css';
import {ListPokemon , NavbarComponent} from './Component';
import DetailPokemon from './Component/DetailPokemon';
import  MyPokemon from './Component/MyPokemon';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
// import Element from './Component/Element';
// import NavbarComponent from './Component/NavbarComponent';
import axios from 'axios';
import FormName from './Component/formName';

function App(){
  return (
    <Router>
      <div>
        <NavbarComponent />
        <Route path = "/MyPokemon" component = {MyPokemon}/>
        <Route path ="/" exact component = {ListPokemon} />
        <Route path ="/DetailPokemon" component ={DetailPokemon} />
        <Route path ="/FormName" component = {FormName}/>
      </div>
    </Router>
  );
}

export default App;

// export default class App extends Component {
//   constructor(props){
//     super(props);

//     this.state = {
//       Pokemon: [],
//     }
//   }

//   componentDidMount(){
//     axios.get(`https://pokeapi.co/api/v2/pokemon`)
//     .then(res => {
//       // console.log("Variable RES", res);
//       // console.log(res.data.results);
//       const pokemons = res.data.results;
//       this.setState({
//         Pokemon: pokemons
//       });
//       // this.setState({ persons });
//     })
//   }

//   render(){
//     console.log("THIS IS FROM RENDER SECTION", this.state);
//     const {Pokemon} = this.state
//     return (
//       <div className="App">
//         <NavbarComponent />
//         <div className = "mt-3">
//           <Container fluid>
//             <Row>
//               {/* <ListPokemon /> */}
//               <Col className = "ml-8 mr-8">
//                 <h4>
//                   <strong>Nama Pokemon</strong>
//                 </h4>
//                 <hr />
//                 <Row>
//                   {Pokemon && Pokemon.map((data)=> (
//                     <Data 
//                       key = {data.id}
//                       data = {data}
//                     />
//                   ))}
//                 </Row>
//               </Col>
//               {/* <Element /> */}
//             </Row>
//           </Container>
//         </div>
//         {/* <ContentComponent /> */}
//       </div>
//     );
//   }
// }

