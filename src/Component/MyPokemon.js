import React,{useState , useEffect}from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Col , Button , CardGroup , Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {Releasepoke, decrement} from '../actions/index';
import Home from '../API'

function MyPokemon ({data}){
    const counter = useSelector(state => state.counter);
    const ReleasePoke = () =>{
        dispatch(decrement());
        dispatch(Releasepoke());
    }
    const dispatch = useDispatch();
    console.log("MY POKEMON IN HERE", counter)
    return(
        <CardGroup>
            {counter.Mypokemon && counter.Mypokemon.map((data)=>(
                <div>
                    <Card className = "App ml-4 mt-2" >
                        <img src={data.FotoPoke}></img>
                        <Card.Body>
                            <Card.Title>
                                <Col>
                                    <h4>{data.NamePoke} ({data.NameCust})</h4>
                                </Col>
                            </Card.Title>
                            <Button variant="dark" className="ml-2" onClick ={ReleasePoke}>
                                Release
                            </Button>
                            {/* <Button variant="dark" type ="submit" >
                                <Link>Realese</Link>
                            </Button> */}
                        </Card.Body>
                    </Card>
                </div>
            ))} 
        </CardGroup>
    );
}

export default MyPokemon;