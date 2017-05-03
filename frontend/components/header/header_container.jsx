import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchFeaturedParks } from '../../actions/park_actions';
import Header from './header';

const mapStateToProps = ( state ) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchFeaturedParks: () => dispatch(fetchFeaturedParks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
