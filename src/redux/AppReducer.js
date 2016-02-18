import todosReduce from './TodosReducer';
import visibilityFilterReduce from './VisibilityFilterReducer';

export default function (state, action) {
    return {
        todos: todosReduce(state.todos, action),
        visibilityFilter: visibilityFilterReduce(state.visibilityFilter, action)
    };
}