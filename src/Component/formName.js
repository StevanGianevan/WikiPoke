import React, { useState }  from 'react';
import ReactDOM from 'react-dom';
import { Form , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {increment,  Formnames} from '../actions/index';

function FormName(props){
    const counter = useSelector(state => state.type); //manggil state yanga da di reducer
    const [names , setNames] = useState("")
    const inputname = e => {
        console.log(e.target.value);
        setNames (e.target.value)
    }
    const catchpoke  = () => {
        console.log("FORM NAME",props);
        dispatch(increment());
        dispatch(Formnames({
            NamePoke: props.location.data.name,
            NameCust :  names
        }));
    }
    const dispatch = useDispatch(); // untuk menjalankan action
    return (
        <div className = "FormName">
            {/* <h1>Counter {counter}</h1> */}
            <Form className= "ml-4 mr-4" >
                <h3>
                    Create Name For Your Pokemon
                </h3>
                <Form.Group >
                    <Form.Control size="sm" type="text" placeholder="Input Your Name" 
                    onChange = {inputname}/>
                </Form.Group>
                <Button variant="dark" type="submit" onClick = {catchpoke}>
                    <Link to ={{pathname:'/MyPokemon'}}>Submit</Link>
                </Button>
            </Form>
        </div>
    );
}


export default FormName