import { connect } from 'react-redux';
import Link from './Link';

const mapStateToProps = (state, ownProps) => ({
    isActive: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLinkClick: () => {
        dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: ownProps.filter
        });
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);