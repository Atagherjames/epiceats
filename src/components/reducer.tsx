// reducer.ts

export interface Action {
  type: string;
  payload: any;
}

export interface InitialState {
  size: string;
  date: string;
  time: string;
  firstName: string;
  secondName: string;
  phoneNumber: string;
  email: string;
}

export const initialState: InitialState = {
  size: "1",
  date: "",
  time: "",
  firstName: "",
  secondName: "",
  phoneNumber: "",
  email: "",
};

export const reducer = (state: InitialState, action: Action): InitialState => {
  switch (action.type) {
    case "SIZE":
      return { ...state, size: action.payload };
      break;
    case "DATE":
      return { ...state, date: action.payload };
      break;
    case "TIME":
      return { ...state, time: action.payload };
      break;
    case "FIRST_NAME":
      return { ...state, firstName: action.payload };
      break;
    case "SECOND_NAME":
      return { ...state, secondName: action.payload };
      break;
    case "PHONE_NUMBER":
      return { ...state, phoneNumber: action.payload };
    case "EMAIL":
      return { ...state, email: action.payload };
      break;
    default:
      return state;
  }
};
