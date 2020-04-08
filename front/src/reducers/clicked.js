const initialState = {
    clicked: false,
    portfolio: true,
}

export const clicked = (state = initialState, { type }) => {
    switch(type) {
        case 'CLICKED':
            return {
                ...state,
                clicked: !state.clicked,
            };
        case 'PORTFOLIO':
            return {
                ...state,
                portfolio: !state.portfolio,
            };
        default:
            return state;
    }
};