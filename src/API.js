import { useEffect, useState } from "react"
import {} from 'react-bootstrap'

const Home = ({data}) => {
    const [Pokemon , setpokemon] = useState([]);

    useEffect(()=> {
        Data();
    },[]);

    const Data = async()=> {
        const response = await fetch (`${data.url}`);
        const dari = await response.json();

        setpokemon(dari);
    }
    return (
        <div >
            {Pokemon.sprites ?<img src={Pokemon.sprites.front_default} />:null}
        </div>
    );
}

export default Home;