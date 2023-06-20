import { configureStore } from "@reduxjs/toolkit";
import selecteduserSlice from "./reducer/selecteduserSlice";
import userDataSlice from "./reducer/userDataSlice";



export const Store = configureStore({
   reducer: {
      selectedUser: selecteduserSlice,
      userData: userDataSlice,
   },
});