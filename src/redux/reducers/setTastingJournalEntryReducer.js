const setTastingJournalEntry = (state = {}, action) => {
    switch (action.type) {
      case 'SET_TASTING_JOURNAL_ENTRY':
        return action.payload[0];
        case 'CLEAR_TASTING_JOURNAL_ENTRY':
          return {};
      default:
        return state;
    }
  };

  export default setTastingJournalEntry;