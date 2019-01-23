const ctrl = require('../controllers');

const Routes = [
    {
        path:'/',
        method:'GET',
        controller: ctrl.home.init
    },
    {
        path:'/register',
        method:'POST',
        controller: ctrl.register.user
    },
    {
        path:'/private',
        method:'GET',
        auth:true,
        controller: ctrl.home.private
    },
    {
        path:'/login',
        method:'POST',
        controller: ctrl.login.user
    }
]


module.exports = Routes;