import axios from 'axios';


/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const FETCH_STARTED = 'FETCH_STARTED';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const getSmurfs = () => dispatch => {
  dispatch({type: FETCH_STARTED});
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => dispatch({type: FETCH_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: FETCH_FAILURE, payload: err}))

}

export const ADD_SMURF_STARTED = 'ADD_SMURF_STARTED';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

export const addSmurf = (smurf) => (dispatch) => {
  console.log('ADDING ACTION');
  dispatch({type: ADD_SMURF_STARTED});
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => { console.log(res.data); dispatch({type: ADD_SMURF_SUCCESS, payload: res.data})})
    .catch(err => dispatch({type: ADD_SMURF_FAILURE, payload: err}))
}

export const UPDATING_SMURF_STARTED = 'UPDATING_SMURF_STARTED';
export const UPDATING_SMURF_SUCCESS = 'UPDATING_SMURF_SUCCESS';
export const UPDATING_SMURF_FAILURE = 'UPDATING_SMURF_FAILURE'

export const updateSmurf = smurf => dispatch => {
  dispatch({type: UPDATING_SMURF_STARTED});
  axios
    .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(res=> dispatch({type: UPDATING_SMURF_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: UPDATING_SMURF_FAILURE, payload: err}))
}

export const DELETE_SMURF_STARTED = 'DELETE_SMURF_STARTED';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE'

export const deleteSmurf = smurf => dispatch => {
  dispatch({type: DELETE_SMURF_STARTED});
  axios
    .delete(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(res=> dispatch({type: DELETE_SMURF_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: DELETE_SMURF_FAILURE, payload: err}))
    
}
