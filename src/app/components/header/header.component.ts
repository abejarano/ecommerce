import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ModalSignupComponent} from '../../pages/modal-signup/modal-signup.component';
import {ModalLoginComponent} from "../../pages/modal-login/modal-login.component";
import {SessionClient} from "../../services/SessionClient";
import {Router} from "@angular/router";
import {Utils} from "../../services/Utils";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public dataClient: any;
  public isLogin: boolean;
  public fieldSearch: string;
  constructor(
    public modal: MatDialog,
    private session: SessionClient,
    private router: Router,
    private utils: Utils,
  ) { }

  ngOnInit(): void {
    if (this.session.isAuthenticated()) {
      this.isLogin = true;
      this.dataClient = this.session.getCurrentSession();
    } else {
      this.isLogin = false;
    }
  }

  openModalSignUp(): void {
    const modalSignUp = this.modal.open(ModalSignupComponent, {
      width: '450px',
    });

    modalSignUp.afterClosed().subscribe(result => {

    });
  }

  openModalLogin(): void {
    const modalSignUp = this.modal.open(ModalLoginComponent, {
      width: '450px',
    });
  }
  logout() {
    this.session.logout();
  }

  search() {
    if (this.fieldSearch == undefined) {
      this.utils.showMessage('Pode escrever o nome do produto que você deseja');
      return;
    }
    this.router.navigateByUrl('/search?search=' + this.fieldSearch);
  }

}
