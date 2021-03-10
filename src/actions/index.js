export const increment = () => {
    return {
        type : 'INCREMENT'
    };
};

export const decrement = () => {
    return{
        type: 'DECREMENT'
    };
};

export const Formnames = (names) => {
    console.log(names);
    return{
        type : 'TAMBAHNAMA',
        payload : names
    };
};
