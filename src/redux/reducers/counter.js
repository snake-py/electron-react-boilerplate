const counterReducer = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + action.payload;
      case 'DECREMENT':
        return state - 1;
      default:
        return state; // needs default
    }
  };
  
  export default counterReducer;
  