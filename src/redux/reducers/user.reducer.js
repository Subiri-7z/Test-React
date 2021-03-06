import {handleActions} from 'redux-actions'
import {userLogin, userLogout} from '../actions/user.actions';


const initState = {token: ''};
const user = handleActions(
  {
    [userLogin]: (state, action) => {
      return {...state, token: action.payload.token, idBusiness: action.payload.id}
    },
    [userLogout]: (state, action) => {
      return {...state, token: ''}
    }
  },
  initState
)

export default user
