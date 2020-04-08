const initialState = {
    arrowTime: false,
};

export const arrowTime = (state = initialState, { type }) => {
    switch(type) {
        case 'ARROW_TIME':
            return {
                arrowTime: true,
            }
        default:
            return state;
    }
};