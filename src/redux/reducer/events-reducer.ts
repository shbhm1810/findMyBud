interface IDefaultState {
  isLoadingEvents: boolean;
  errorMessage: string;
  data: Array<[]>;
}

const eventsReducer = (
  state: IDefaultState = {
    isLoadingEvents: false,
    errorMessage: '',
    data: [],
  },
  action,
) => {
  switch (action.type) {
    case 'GET_EVENTS_LOADING':
      return {...state, isLoadingEvents: action.payload};
    case 'GET_EVENTS_SUCCESS':
      return {...state, data: action.payload};
    case 'GET_EVENTS_FAILURE':
      return {...state, errorMessage: action.payload};
    default:
      return state;
  }
};

export {eventsReducer};
