const entryEditDialogShow = (state = false, action) => {
    switch (action.type) {
      case 'ENTRY_EDIT_DIALOG_SHOW':
        return !state;
      default:
        return state;
    }
  };

  export default entryEditDialogShow;