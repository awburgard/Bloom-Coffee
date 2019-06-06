const getKansasCity = (state = [], action) => {
    switch (action.type) {
      case 'SET_KC':
        return action.payload;
      default:
        return state;
    }
  };

  export default getKansasCity;