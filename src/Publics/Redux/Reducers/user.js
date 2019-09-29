const init = {
  user: '',
  error: {
    isError: false,
    cause: '',
  },
};

const user = (state = init, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return {
        ...state,
        user: action.user,
        error: {
          isError: false,
          cause: null,
        },
      };
    case 'ERROR':
      return {
        ...state,
        error: {
          isError: true,
          cause: action.error,
        },
      };
    default:
      return state;
  }
};

export default user;
