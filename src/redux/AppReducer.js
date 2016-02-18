import todos from './TodosReducer';
import visibilityFilter from './VisibilityFilterReducer';

import { combineReducers } from 'redux';

export default combineReducers({
    todos,
    visibilityFilter
});