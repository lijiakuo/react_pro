import login from '../routers/login'
import pLogin from '../routers/pLogin'
import home from '../routers/home'
const aa = (app) => {
    app.post('/login', login)
    app.post('/pLogin', pLogin)
    app.post('/home', home)
}
export { aa }