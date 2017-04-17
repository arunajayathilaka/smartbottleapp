import {SAVE_REMINDER} from '../actions';

// This is the default state of the app i.e. when the app starts for the first time
const initialState = {
  reminderType:'',
  enabled:false,
  stime:'08:20',
  etime:'09:20',
  interval:'09:20',
  time:'97:45'
}


// This is a reducer which listens to actions and modifies the state
export default function(state, action){
  // A switch is used since if more actions are added in the future, it will be easy
  // to be able to handle this in the reducer since we just add another 'case'.
  
  switch (action.type) {
    case 'SAVE_REMINDER':
     alert("in"+action.data.stime);
      return {
        ...state,
        reminderType:action.data.reminderType,
        enabled:action.data.enabled,
        stime:action.data.stime,
        etime:action.data.etime,
        interval:action.data.interval,
        time:action.data.time
      }
    default:
    alert(initialState.stime);
      return initialState




  }

}