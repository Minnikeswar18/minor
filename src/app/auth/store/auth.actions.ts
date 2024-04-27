import { createAction, props } from "@ngrx/store";

export const handleLogin = createAction('[Auth] Login' , props<{payload : any}>());

export const handleSignUp = createAction('[Auth] Signup' , props<{payload : any}>());

export const setLoading = createAction('[Auth] Set Loading' , props<{loading : boolean}>());

export const handleFailure = createAction('Error' , props<{error : any}>());

export const handleSuccess = createAction('Response' , props<{response : any}>());

