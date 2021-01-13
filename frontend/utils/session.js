//create user
export const postUser = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users/',
    data: { user }
  })
)

//sign in
export const postSession = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
)

//log out
export const deleteSession = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
)