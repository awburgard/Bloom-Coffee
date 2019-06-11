import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getEntry(action) {
    try {
        const response = yield axios.get(`/api/tasting_journal/${action.payload}`)
        console.log('GET ENTRY', response)
        yield put({ type: 'SET_TASTING_JOURNAL_ENTRY', payload: response.data })
    } catch (error) {
        console.log('Error with getting entries:', error);
    }
};
function* TastingJournalEntry() {
yield takeLatest('GET_ENTRY', getEntry);
}

export default TastingJournalEntry;