const isAuthenticatedGuard = async( to, from, next) =>{

  const isAuthenticated = localStorage.getItem('token') || false

  if(!isAuthenticated){
    next({name: 'login'})
  }
  next()
}

export default isAuthenticatedGuard;