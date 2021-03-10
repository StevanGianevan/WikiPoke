import React,{useState , useEffect}from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Col , Button , CardGroup , Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {Formnames, decrement} from '../actions/index';
import Home from '../API'

function MyPokemon (props){
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    console.log("MY POKEMON IN HERE", counter)
    return(
        <CardGroup>
            {counter.Mypokemon && counter.Mypokemon.map((data)=>(
                <div>
                    <Card className = "App ml-4 mt-2" >
                        <Home 
                            key = {props.id}
                            data = {props}
                        />
                        <Card.Body>
                            <Card.Title>
                                <Col>
                                    <h4>{data.NamePoke} ({data.NameCust})</h4>
                                </Col>
                            </Card.Title>
                            <Button variant="dark" className="ml-4">
                                <Link to={{
                                    pathname: '/',
                                }}>Back to List Pokemon </Link>
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