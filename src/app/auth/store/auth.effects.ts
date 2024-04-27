import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { AuthService } from "./auth.service";
import { handleLogin } from "./auth.actions";
import { handleFailure , handleSuccess } from "./auth.actions";
import { exhaustMap , tap , pipe, Observable, EMPTY } from "rxjs";
import { catchError, finalize, map, switchMap } from "rxjs/operators";
// import { MessageService } from "primeng/api";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService , private http : HttpClient) {}

    handleLogin = createEffect(() => 
    this.actions$.pipe(
        ofType(handleLogin),
        tap(() => this.authService.setLoading(true)),
        switchMap(action => {
            return this.authService.login(action.payload).pipe(
                map((data: any) => {
                    data.responseFor = 'login';
                    return handleSuccess({response : data});
                }),
                catchError((err) => {
                    return of(handleFailure({error : err}));
                }),
                finalize(() => this.authService.setLoading(false))
            )
        }),
    ))
}