import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MenuHorizontalComponent } from './menu-horizontal/menu-horizontal.component';
import {MatMenuModule} from '@angular/material/menu';
import {RouterModule} from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {ModalSignupComponent} from '../pages/modal-signup/modal-signup.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ModalLoginComponent} from "../pages/modal-login/modal-login.component";


@NgModule({
  declarations: [HeaderComponent, MenuHorizontalComponent, ModalSignupComponent, ModalLoginComponent],
  exports: [
    HeaderComponent,
    MenuHorizontalComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatDialogModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule { }
