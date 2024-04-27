import { createReducer, on } from "@ngrx/store";
import { handleFailure, handleSuccess, setLoading } from './auth.actions'

export const isLoading : boolean = false;
export const error : any = null;
export const response : any = null;
export const loggedUser : any = null;

export const loadingReducer = createReducer(
    isLoading,
    on(setLoading , (state , {loading}) => loading)
)

export const errorReducer = createReducer(
    error,
    on(handleFailure , (state , {error}) => error)
)

export const responseReducer = createReducer(
    response,
    on(handleSuccess , (state , {response}) => response)
)

