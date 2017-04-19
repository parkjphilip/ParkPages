import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ( state ) => {
  debugger
  return ({
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  debugger
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (ownProps.formType === 'login') ? login : signup;
  debugger

  return ({
    processForm: user => dispatch(processForm(user)),
    formType
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
