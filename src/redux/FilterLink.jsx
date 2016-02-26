import { connect } from 'react-redux';
import Link from './Link';
import { setVisibilityFilter } from './Actions';

const mapStateToProps = (state, ownProps) => ({
    isActive: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLinkClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);