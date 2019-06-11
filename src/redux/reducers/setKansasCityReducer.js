const setKansasCity = (state = [], action) => {
    switch (action.type) {
      case 'SET_KC':
        return action.payload[0];
      default:
        return state;
    }
  };

  export default setKansasCity;