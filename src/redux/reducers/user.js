const initialState = {
  listUser: [],
  isLoading: false,

};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LIST":
      return { ...state, listUser: action.payload };
    case "IS_LOADING":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default userReducer;
