function counter(state, action) {
    if (typeof state === 'undefined') {
      state = 100 // If state is undefined, initialize it with a default value
    }
  
    if (action.type === 'INCREMENT') {
      return state + 1
    } else if (action.type === 'DECREMENT') {
      return state - 1
    } else {
      return state // In case an action is passed in we don't understand
    }
  }

  export default counter;
