import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from '../Constant';

const InitialState = {
    user: null
}

const AuthReducer = (state = InitialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                user: action.payload
            }
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload
            }
        case LOGOUT_USER:
            return {
                ...state,
                user: action.payload
            }
    
        default:
            return state
    }
}


export default AuthReducer;