// Build our ajax methods so we can retreive/store/check data from the database and routes

// jquery.ajax()
export const signup = user => (
  $.ajax({
    method: 'POST',
    url: "/api/users",
    data: { user }
  })
);

export const login = user => (
  $.ajax({
    method: 'POST',
    url: "/api/session",
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: 'api/session'
  })
);
