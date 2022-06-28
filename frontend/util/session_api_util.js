// Build our ajax methods so we can retreive/store/check data from the database and routes

// jquery.ajax()
export const signup = user => {
  return $.ajax({
    method: 'POST',
    url: "/api/users",
    data: { user }
  })
};

export const login = user => {
  return $.ajax({
    method: 'POST',
    url: "/api/session",
    data: { user }
  })
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
};

export const getUsers = (data) => {
  return $.ajax({
    method: 'GET',
    url: '/api/users',
    data
  })
}
