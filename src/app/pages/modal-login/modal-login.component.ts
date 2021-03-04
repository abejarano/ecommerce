import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Utils} from "../../services/Utils";
import {RequestAPI} from "../../services/RequestAPI";
import {SessionClient} from "../../services/SessionClient";

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {
  public form: FormGroup;
  public request: boolean;

  constructor(
    public dialogRef: MatDialogRef<ModalLoginComponent>,
    public utils: Utils,
    private http: RequestAPI,
    private session: SessionClient
  ) { }

  ngOnInit(): void {
    this.request = false;
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(6), Validators.required]),
    });
  }

  setMakeLogin() {
    if (this.form.invalid) {
      this.utils.showMessage('Por favor, digite os campos corretamente...');
      return ;
    }
    this.request = true;
    this.http.post('login', this.form.getRawValue(), false).subscribe( (response: any) => {
      this.request = false;
      this.session.registerSession(response);
      this.utils.showMessage('Bem-vindo');
      window.location.reload();
    }, error => {
      this.utils.showMessage(error.error.message);
      this.request = false;
    });
  }

  closed(): void {
    this.dialogRef.close();
  }

}
