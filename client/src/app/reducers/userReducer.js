import { Types } from '../actions/userActions'

const INITIAL_STATE = {
    user:[]
}

export default function users(state = INITIAL_STATE, action) {
    switch (action.type) {    
        case Types.SET_USER:
            return {
                ...state,
                user:[
                    action.user
                ],
            }

        
        default:
            return state;
    }
}

