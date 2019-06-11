const getTastingJournalEntry = (state = [], action) => {
    switch (action.type) {
      case 'SET_TASTING_JOURNAL_ENTRY':
        return action.payload;
      default:
        return state;
    }
  };

  export default getTastingJournalEntry;