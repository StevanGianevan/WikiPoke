import React , {useState , useEffect} from 'react'
import { Col , Card , Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Home from '../API'

const Data = (props) => {
    const butStyle = {
        color : 'white'
    }
    return (
        <Col md = {6} xs = {4} className = "mb-4">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                        <Home
                            key = {props.id}
                            data = {props.data}
                        />
                    <Card.Title >{props.data.name}</Card.Title>
                    <Button variant="dark" className = "ml" block>
                        <Link to={{
                            pathname: '/DetailPokemon',
                            data: props.data
                        }} style ={butStyle}>Go to details Pokemon</Link>
                    </Button>
                    <Button variant="dark" className= "ml" block>
                        <Link to={{
                            pathname: '/FormName',
                            data: props.data
                        }} style ={butStyle}>Catch</Link>
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Data