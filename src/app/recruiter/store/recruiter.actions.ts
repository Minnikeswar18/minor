import { createAction, props } from "@ngrx/store";

export const setLoading = createAction('[Recruiter] Set Loading' , props<{loading: boolean}>);

export const setProfiles = createAction('[Recruiter] Set Profiles' , props<{profiles: any}>);

export const setJobs = createAction('[Recruiter] Set Jobs' , props<{jobs: any}>);

export const setMatchingProfiles = createAction('[Recruiter] Matching Profiles' , props<{profiles: any}>);

export const handleReponse = createAction('[Recruiter] Handle Response' , props<{response: any}>);

export const handleError = createAction('[Recruiter] Handle Error' , props<{error: any}>);