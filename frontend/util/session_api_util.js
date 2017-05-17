export const login = (user) => {
  return $.ajax({
    method: 'post',
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
    method: 'post',
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

export const createUserPhoto = (formData) => {
  $.ajax({
    url: `/api/users/${formData.user.id}`,
    method: "POST",
    dataType: "json",
    contentType: false,
    processData: false,
    data: {
      photo: {
        user_id: formData.user.id,
        image: formData.user.image
      }
    },
  });
};
