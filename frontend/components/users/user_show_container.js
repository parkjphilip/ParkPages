import { connect } from 'react-redux';
import UserShow from './user_show';


const mapStateToProps = ( state ) => {
  return ({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = ( dispatch ) => {


  return ({

  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
