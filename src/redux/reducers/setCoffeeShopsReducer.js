const setCoffeeShops = (state = [], action) => {
    switch (action.type) {
      case 'SET_SHOPS':
        return action.payload;
        case 'SET_ALL_SHOPS':
          return action.payload;
      default:
        return state;
    }
  };

  export default setCoffeeShops;