const initState = {
  countValue: 0,
  posts: []
};

export const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log('incremen', action);
      return {
        ...state,
        countValue: state.countValue + 1
      };
    case 'DECREMENT':
      console.log('decrement', action);
      return {
        ...state,
        countValue: state.countValue - 1
      };
    case 'RESET':
      console.log('reset', action);
      return {
        ...state,
        countValue: 0
      };
    case 'POSTS_SUCCESS':
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
};
