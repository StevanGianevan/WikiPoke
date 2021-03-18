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
    console.log("FORMNAMES",names);
    return{
        type : 'TAMBAHNAMA',
        payload : names
    };
};

export const Releasepoke = (names) => {
    console.log("RELEASE", names);
    return{
        type : 'RELEASEPOKE',
        payload : names
    };
};
