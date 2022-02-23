import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from '../Constant';


export const register = (payload) => ({
    type: REGISTER_USER,
    payload
})



export const login = (payload) => ({
    type: LOGIN_USER,
    payload
})



export const logout = (payload) => ({
    type: LOGOUT_USER,
    payload
})




