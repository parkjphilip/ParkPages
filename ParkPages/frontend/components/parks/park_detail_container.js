import { connect } from 'react-redux';
import { login, logout, signup, resetErrors, loginGuest } from '../../actions/park_actions';
import SessionForm from './session_form';


const mapStateToProps = ( state ) => {
  return ({
    park: state.parks[ownProps.params.parkId]
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return ({
    processForm: user => dispatch(processForm(user)),
    resetErrors: () => dispatch(resetErrors()),
    loginGuest: () => dispatch(loginGuest()),
    formType
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
