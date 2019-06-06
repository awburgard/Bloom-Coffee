const tastingJournalEntries = (state = [], action) => {
    switch (action.type) {
      case 'SET_ENTRIES':
        return action.payload;
      default:
        return state;
    }
  };

  export default tastingJournalEntries;