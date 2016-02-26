import { connect } from 'react-redux';
import TodoList from './TodoList';
import { toggleTodo, VisibilityFilters } from './Actions';

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(
        state.todos,
        state.visibilityFilter
    )
});

function getVisibleTodos(todos, filter) {
    if (filter === VisibilityFilters.SHOW_ALL) {
        return todos;
    } else if (filter === VisibilityFilters.SHOW_COMPLETED) {
        return todos.filter((todo) => todo.completed);
    } else if (filter === VisibilityFilters.SHOW_ACTIVE) {
        return todos.filter((todo) => !todo.completed);
    } else {
        return todos;
    }
}

const mapDispatchToProps = (dispatch) => ({
    onTodoClick: (id) => {
        dispatch(toggleTodo(id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);