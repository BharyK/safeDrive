import { createSlice, PayloadAction } from '@reduxjs/toolkit';
 

export interface User {
    user: {
      data: null | any;
      isLoading: boolean;
      errors: string;
      message: string;
    }
  }

  const initialState: User = {
    user: {
      data: null,
      isLoading: false,
      errors: '',
      message: '',
    },
  };
  
  const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

      sliceAunticationRequest: (state: User, action: PayloadAction<{ username: string, password : any }>) => {
        state.user.isLoading = true;
         state.user.data = ''
      },
      sliceAunticationSuccess: (state:User, action: PayloadAction<User>) => {
        state.user.isLoading = false;
        state.user.data = action.payload
        console.log ("success", action.payload)
      },
      sliceAunticationFailure: (state: User) => {
        state.user.isLoading = false;
        state.user.errors= ''
        console.log ("errors")
      }
    },
  });

  export const { sliceAunticationRequest,
    sliceAunticationSuccess, sliceAunticationFailure
  } = userSlice.actions;
  export default userSlice.reducer;

  //action: PayloadAction<{ username: string, password : any }