const intialState = {
    counter : 0,
    Mypokemon : []
}
const counterReducer = (state = intialState , action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, counter: state.counter += 1};// ... untuk mencopy 
        case 'DECREMENT':
            return { ...state, counter: state.counter -= 1};
        case 'TAMBAHNAMA':
            console.log("ACTIONPAYLOAD",action.payload);
            return { ...state, Mypokemon: state.Mypokemon.concat(action.payload)};
        case 'RELEASEPOKE':
            console.log("NAMES");
            return{ ...state, Mypokemon: state.Mypokemon.filter((pokemon)=> pokemon.NamePoke === action.payload)};
        default:
            return state;
    }
}


export default counterReducer;

// state.Mypokemon.filter(function(pokemon){
//     return pokemon.NameCust === action.payload
// })
