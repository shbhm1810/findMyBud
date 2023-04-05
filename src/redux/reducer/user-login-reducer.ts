interface IDefaultState {
  isLoadingLogin: boolean;
  errorMessage: string;
  confirmation: any;
  uid: string;
}

const userLoginReducer = (
  state: IDefaultState = {
    isLoadingLogin: false,
    errorMessage: '',
    confirmation: null,
    uid: '',
  },
  action,
) => {
  switch (action.type) {
    case 'LOGIN_LOADING':
      return {...state, isLoadingLogin: action.payload};
    case 'LOGIN_SUCCESS':
      return {...state, confirmation: action.payload};
    case 'LOGIN_FAILURE':
      return {...state, errorMessage: action.payload};
    case 'VERITY_OTP_LOADING':
      return {...state, isLoadingLogin: action.payload};
    case 'VERITY_OTP_SUCCESS':
      return {...state, uid: action.payload};
    case 'VERITY_OTP_FAILURE':
      return {...state, errorMessage: action.payload};
    default:
      return state;
  }
};

export {userLoginReducer};
