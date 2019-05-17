/*
  Be sure to import in all of the action types from `../actions`
*/

import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE,
  ADD_SMURF_STARTED, ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE,
  UPDATING_SMURF_STARTED, UPDATING_SMURF_SUCCESS, UPDATING_SMURF_FAILURE,
  DELETE_SMURF_STARTED, DELETE_SMURF_SUCCESS, DELETE_SMURF_FAILURE
} from '../actions'

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
  fetching: false,
  addingSmurf: false,
  updating: false,
  deleting: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case FETCH_STARTED:
    return {
      ...state,
      fetching: true
    }

    case FETCH_SUCCESS:
    return {
      ...state,
      fetching: false,
      error: null,
      smurfs: action.payload
    }

    case FETCH_FAILURE:
    return {
      ...state,
      fetching: false,
      error: action.payload
    }

    case ADD_SMURF_STARTED:
      return {
        ...state,
        addingSmurf: true
      }

    case ADD_SMURF_SUCCESS:
        return {
          ...state,
          addingSmurf: false,
          error: null,
          smurfs: action.payload

        }
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      }

    case UPDATING_SMURF_STARTED:
      return {
        ...state,
        updating: true
      }
    
    case UPDATING_SMURF_SUCCESS:
      return {
        ...state,
        updating: false,
        error: null,
        smurfs: action.payload
      }
    case UPDATING_SMURF_FAILURE:
        return {
          ...state,
          updating: false,
          error: action.payload,
        }

          case DELETE_SMURF_STARTED:
            return {
              ...state,
              deleting: true
            }
          
          case DELETE_SMURF_SUCCESS:
            return {
              ...state,
              deleting: false,
              error: null,
              smurfs: action.payload
            }
          case DELETE_SMURF_FAILURE:
              return {
                ...state,
                deleting: false,
                error: action.payload,
              }

    default:
    return state
  }
}

export default reducer;
