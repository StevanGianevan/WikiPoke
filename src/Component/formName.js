import React, { useState }  from 'react';
import ReactDOM from 'react-dom';
import { Form , Button , Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {increment,  Formnames} from '../actions/index';
import MyPokemon from './MyPokemon';

function FormName({Detail}){
    const counter = useSelector(state => state.type); //manggil state yanga da di reducer
    const [names , setNames] = useState("")
    const inputname = e => {
        console.log(e.target.value);
        setNames (e.target.value)
    }
    const catchpoke  = () => {
        console.log("FORM NAME",Detail);
        dispatch(increment());
        dispatch(Formnames({
            NamePoke: Detail.name,
            NameCust :  names,
            FotoPoke : Detail.sprites.front_default
        }));
    }
    console.log("FormName",Detail);
    const dispatch = useDispatch(); // untuk menjalankan action
    return (
        <div className = "FormName">
            {/* <h1>Counter {counter}</h1> */}
            <Form className= "ml-4 mr-4" >
                <h3><strong>CATCH SUCCESS !!</strong></h3>
                <h5>
                    Create Name For Your Pokemon
                </h5>
                <Form.Group >
                    <Form.Control size="sm" type="text" placeholder="Input Your Name" 
                    onChange = {inputname}/>
                </Form.Group>
                <Link to ={{pathname:'/MyPokemon'}}>
                    <Button variant="dark" type="submit" onClick = {catchpoke}>
                        Submit
                    </Button>
                </Link>
            </Form>
        </div>
    );
}


export default FormName