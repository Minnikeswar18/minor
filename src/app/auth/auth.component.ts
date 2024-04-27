import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { responseSelector , errorSelector } from "./store/auth.selectors";
import { MessageService } from "primeng/api";

@Component({
    selector: 'app-auth',
    templateUrl : './auth.component.html',
})

export class AuthComponent {
    constructor(private store : Store , private messageService : MessageService) {
        this.store.select(responseSelector).subscribe((response) => {
            if(!response || response.message) return;
            this.messageService.add({severity:'success', summary: 'Success', detail: response.message});
        })

        this.store.select(errorSelector).subscribe((resp) => {
            if(!resp) return;
            this.messageService.add({severity:'error', summary: 'Error', detail: resp.error ?? 'Error Occured at server'});
        })
    }
}