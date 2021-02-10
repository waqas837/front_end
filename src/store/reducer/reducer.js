const initState = {
  id:"",
  email: "",
  password: "",
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case "delet_data":
      return { ...state,id:action.id, email: action.email, password: action.password };
      break;

    default:
      return state;
      break;
  }
};
