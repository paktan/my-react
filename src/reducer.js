export function ReduceEvent(state= null, action) {
  switch(action.type) {
    case "data_change" :
      return action
    default:
      return state
  }
}