import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Utils} from "../../services/Utils";
import {RequestAPI} from "../../services/RequestAPI";

@Component({
  selector: 'app-modal-signup',
  templateUrl: './modal-signup.component.html',
  styleUrls: ['./modal-signup.component.scss']
})
export class ModalSignupComponent implements OnInit {
  public form: FormGroup;
  public request: boolean;

  constructor(
    public dialogRef: MatDialogRef<ModalSignupComponent>,
    public utils: Utils,
    private http: RequestAPI,
  ) { }

  ngOnInit(): void {
    this.request = false;
    this.form = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(6), Validators.required]),
      pass: new FormControl('', [Validators.minLength(6), Validators.required]),
    });
  }

  closed(): void {
    this.dialogRef.close();
  }

  async setMakeRegister() {
    if (this.form.invalid) {
      this.utils.showMessage('Por favor, digite os campos corretamente...');
      return ;
    }
    this.request = true;
    this.http.post('signup', this.form.getRawValue(), false).subscribe( (response: any) => {
      this.request = false;
      this.utils.showMessage(response.message);
      this.closed();
    }, error => {
      this.request = false;
    });
  }

}
