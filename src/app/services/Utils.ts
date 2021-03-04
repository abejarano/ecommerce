import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class Utils {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  showMessage(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }
}
