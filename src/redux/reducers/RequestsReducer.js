const initialState = {}

const RequestsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET':
      return {
        ...state,
        payload: action.payload,
      }

    default:
      return state
  }
}

export default RequestsReducer
