import { connect } from 'react-redux';
import TodoList from './TodoList';

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(
        state.todos,
        state.visibilityFilter
    )
});

function getVisibleTodos(todos, filter) {
    if (filter === 'SHOW_ALL') {
        return todos;
    } else if (filter === 'SHOW_COMPLETED') {
        return todos.filter((todo) => todo.completed);
    } else if (filter === 'SHOW_ACTIVE') {
        return todos.filter((todo) => !todo.completed);
    } else {
        return todos;
    }
}

const mapDispatchToProps = (dispatch) => ({
    onTodoClick: (id) => {
        dispatch({
            type: 'TOGGLE_TODO',
            id
        });
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);