// We speciify the name of the action as a variable
export const SAVE_REMINDER = 'SAVE_REMINDER';

// This is an action creator, it simply specifies the action.
// this is what we call to send an action.
export function saveReminder(data) {
	
  return {
    type: SAVE_REMINDER,
    data
  }
}