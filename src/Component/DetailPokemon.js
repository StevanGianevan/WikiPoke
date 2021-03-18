import React, {useEffect , useState} from 'react'
import {Button , Card , ListGroup , ListGroupItem , Form} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux';
import {increment,  Formnames} from '../actions/index';
import {Link} from 'react-router-dom'
import FormName from './formName'
import Home from '../API'
import NotifFail from './NotifFail';

const DetailPokemon = ({match}) =>{ 
  const [Details , setDetails] = useState([]);
  const counter = useSelector(state => state.type);
  const [Catchpoke , setCatchpoke] = useState();
  const [Success , setSuccess] = useState(false);
  const [Failed , setFailed] = useState(false)
  const [TombolNext , setTombolNext] = useState(false)
  const {id} = match.params;
  const [names , setNames] = useState("")
  let Namecust;
  let notifFailed;

  const CatchPoke = () => {
    setCatchpoke(Math.floor(Math.random() * (2 - 1 + 1) + 1));
    if (Catchpoke == 1){
      setSuccess(true)
      setFailed(false)
      setTombolNext(true)
      console.log("Catch Success!!")
    }
    else{
      setSuccess(false)
      setTombolNext(false)
      setFailed (true)
      console.log("Catch Failed");
    }
   
  }

  if (Success){
    Namecust = <FormName Detail = {Details} />
  }
  
  if (Failed){
    notifFailed = <NotifFail Detail = {Details} />
  }


  useEffect(() => { // hanya menjalankan sekali
      DetailsPoke();
  },[]);

  const DetailsPoke = async() =>{
      const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${match.params.id}`);
      const details = await response.json();

      setDetails(details);
  }
  console.log("DETAILS",Details);
  console.log("AYO DONK MASUK",match);
  return (
      <div>
         <Card className="text-center">
                <Card.Header >
                  <h2><strong>{Details.name}</strong></h2>
                </Card.Header>
                <Card.Body>                   
                    {Details.sprites ?<img src={Details.sprites.front_default}/>:null}
                    <Card.Title>Types :</Card.Title>
                    <Card.Title>
                        {Details.types && Details.types.map(Details =>
                            <Button className="ml-2">{Details.type.name}</Button>
                        )}
                    </Card.Title>                    
                    <ListGroup className="list-group-flush">
                      <Card.Title>Moves :</Card.Title>
                        {Details.moves && Details.moves.slice(0,4).map(Details =>
                        <ListGroupItem>
                                <h5>{Details.move.name}</h5>
                        </ListGroupItem>
                        )}
                    </ListGroup>
                </Card.Body>
                <Card.Footer className="text-muted"> 
                   <Button variant="dark" disabled = {TombolNext} onClick = {CatchPoke} className ="mb-4">
                      Catch 50% Chance
                  </Button>
                  {Namecust}
                  {notifFailed}
                </Card.Footer>
            </Card>
      </div>
  );
}

export default DetailPokemon;

// export default class DetailPokemon extends Component {
//     constructor(props){
//       super(props);
  
//       this.state = {
//         Pokemon: [],
//         Details: [],
//         url :''
//       }
//       this.getDetails = (urlPokemon) =>{
//         console.log("URL",urlPokemon);
//         axios.get(urlPokemon)
//         .then(res => { 
//         //   console.log("Variable RES", res);
//           console.log("DETALIS",res.data.results);
//           const details = res.data;
//           this.setState({
//             Details: details,
//             url : urlPokemon
//           });
//         })
//       }
//     }
    
//     componentDidMount(){
//       console.log(this.props);
//         this.setState({
//             Pokemon:this.props.location.data
//         });


//     }
  
//     render(){
//       console.log("THIS IS FROM RENDER SECTION", this.props);
      
//       const {Pokemon, Details} = this.state
//       if(this.state.Details.length==0){
//         console.log("MASUK SINI",this.state.Details);
//         const detailPokemon=this.getDetails(this.state.Pokemon.url);
//       }
//       else{
//         console.log("MALAH MASUK KESINI", this.state.Details);
//         const detailPokemon="";
//       }

//       // console.log( JSON.stringify(this.state.Details.abilities));
//       const abilities = this.state.Details.abilities;
//       console.log("ABILITIES", abilities);

//       const ability=[];
      
//       if(abilities!==undefined){
//         abilities.map(function(item, index){
//           ability.push(item.ability);
//         })
//       }

//       // console.log("ability",ability[0]);
      
//       // console.log(abilities[0]);
//       // this.state.Details.abilities.map(function(item, index){
//       //   console.log(item, index);
//       // })

//       return (
//         <div className="App">
//           <div className = "mt-3">
//             <Container fluid>
//               <Row>
//                 {/* <Home 
//                   data = {this.state.urlPokemon}
//                 /> */}
//                 <Col className = "ml-8 mr-8">
//                   <h4>
//                     <strong>Nama Pokemon : </strong>
//                     {this.state.Details.name}
//                     <Button variant="dark" className = "ml-4">
//                         <Link to={{
//                             pathname: '/'
//                         }}>Back to List Pokemon</Link>
//                     </Button>
//                   </h4>
//                   <hr />
//                   <h4>
//                     <strong>Element : </strong>
//                     {this.state.Details.types && this.state.Details.types.map((types)=> (
//                       <h5>- {types.type.name}</h5>
//                     ))}
//                   </h4>
//                   <hr />
//                   <h4>
//                       <strong>Moves : </strong>
//                       {this.state.Details.moves && this.state.Details.moves.map((moves)=>(
//                         <h5>- {moves.move.name}</h5>
//                       ))}
//                   </h4>
//                 </Col>
//               </Row>
//             </Container>
//           </div>
//         </div>
//       );
//     }
//   }