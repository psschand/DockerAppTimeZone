/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { LOAD_REPOS_SUCCESS, LOAD_REPOS, LOAD_REPOS_ERROR,LOAD_AddClock_REPOS,LOAD_updateClockList_REPOS } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
    addedClockrepositories: [{id: 2,
      name: "Local Time",
      TimeZone_id: (new Date().toTimeString()),
      time:new Date(),
      timestring:''}],
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        draft.userData.repositories = false;
        break;

      case LOAD_REPOS_SUCCESS:
        draft.userData.repositories = action.repos;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case LOAD_REPOS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
      case LOAD_AddClock_REPOS:
        console.log(action);
        draft.userData.addedClockrepositories.push(action.clockrepo);
        break;
      case LOAD_updateClockList_REPOS:
          console.log("action time",action.data[0].timestring);
          console.log("new Date",new Date());
          draft.userData.addedClockrepositories = action.data
          break;
    }
  });

export default appReducer;
