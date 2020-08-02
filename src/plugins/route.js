export default ({ app, query }) => {
  if (process.client) {
    app.router.beforeEach((to, from, next) => {
        next()
    })
  }
}
