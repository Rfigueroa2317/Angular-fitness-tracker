import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class UIService {
    loadingStateChanged: any;

    constructor(private snackbar: MatSnackBar) {}

    showSnackbar(message, action, duration) {
        this.snackbar.open(message, action, {
            duration: duration
        })
    }
}