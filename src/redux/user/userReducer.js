//LOGIN PAGE EXPORTS
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'
export const USER_LOGOUT = 'USER_LOGOUT'

//PROFILE PAGE EXPORTS
export const USER_PROFILE_SUCCESS = 'USER_PROFILE_SUCCESS'
export const USER_PROFILE_FAIL = 'USER_PROFILE_FAIL'
export const USER_PROFILE_RESET = 'USER_PROFILE_RESET'
export const USER_PROFILE_UPDATE = 'USER_PROFILE_UPDATE'

const initialState = {
    isLoggedIn:false,
    error:"",
    dataProfil:"",
    token:"",
    firstName:"",
    lastName:"",
    editSuccess:false,
}

/**
 * 
 * @param {state} : gets the current state 
 * @param {action} : gets the action  
 * @returns 
 */
export const userDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return { isLoggedIn: true, token: action.payload.body.token }
        case USER_LOGIN_FAIL:
            return { isLoggedIn: false, token: null, error: action.payload }
        case USER_LOGOUT:
            return { isLoggedIn: false, token: null }
        case USER_PROFILE_SUCCESS:
            return {
              firstName: action.payload.body.firstName,
              lastName: action.payload.body.lastName,
              token: action.token,
              isLoggedIn: true,
            }
        case USER_PROFILE_UPDATE:
            return {
              editSuccess: true,
              firstName: action.payload.body.firstName,
              lastName: action.payload.body.lastName,
              isLoggedIn: true,
              token: action.token,
            }
        case USER_PROFILE_FAIL:
            return { error: action.payload }
        case USER_PROFILE_RESET:
            return {
              firstName: null,
              lastName: null,
            }
        default:
            return state
    }
  }
  