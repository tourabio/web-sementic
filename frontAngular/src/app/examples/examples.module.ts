import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { EmployeesComponent } from './employees/employees.component';
import { ShipsComponent } from './ships/ships.component';
import { DestinationsComponent } from './destinations/destinations.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        EmployeesComponent,
        ShipsComponent,
        DestinationsComponent
    ]
})
export class ExamplesModule { }
