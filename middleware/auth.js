export default ({ store, redirect, route }) => {
  if (!store.state.api.user.jwt) {
    return redirect('/login')
  } else {
    return redirect()
  }
}