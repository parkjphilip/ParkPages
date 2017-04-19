// import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';

export const login = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {
      user: {
        username: user.username,
        password: user.password
      }
    }
  });
};

export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {
      user: {
        username: user.username,
        password: user.password
      }
    }
  });
};

export const logout = () => {
  return $.ajax({
    method: 'delete',
    url: '/api/session'
  });
};

export const loginGuest = () => {
  return $.ajax({
    method: 'post',
    url: '/api/session',
    data: {
      user: {
        username: 'guest',
        password: 'password123'
      }
    }
  });
};
