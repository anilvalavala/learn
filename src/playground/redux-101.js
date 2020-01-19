import { createStore } from 'redux';

const store = createStore((state = {count: 0}, action) => {
    switch (action.type)
    {
        case 'INCREMENT': {
            return {
                count: state.count + action.incrementBy
            }
        }
        case 'DECREMENT': {
            return {
                count: state.count - 1
            }
        }
        case 'RESET': {
            return {
                count: 0
            }
        }
    }
});

store.subscribe(() => {
    console.log(store.getState());
});

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

store.dispatch(incrementCount({incrementBy: 1}));