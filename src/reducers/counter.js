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
            console.log(action.payload);
            return { ...state, Mypokemon: state.Mypokemon.concat(action.payload)};
        default:
            return state;
    }
}


export default counterReducer;