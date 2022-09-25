import { STAFFS, DEPARTMENTS } from "../shared/staffs.jsx";

export const initialState = {
  staffs: STAFFS,
  departments: DEPARTMENTS,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
