import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from "@angular/common/http";
import { PatientsComponent } from './patients/patients.component';

import { PatientListComponent } from './patients/patient-list/patient-list.component';
import { PatientComponent } from './patients/patient-list/patient/patient.component'; 

import { ReactiveFormsModule } from '@angular/forms';

//Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule} from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';

//animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { KnnqueryComponent } from './knnquery/knnquery.component';
import { BallQueryComponent } from './ball-query/ball-query.component';

const appRoutes: Routes = [
  { path: 'patients', component: PatientsComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientListComponent,
    PatientComponent,
    HomeComponent,
    KnnqueryComponent,
    BallQueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    LayoutModule,
    RouterModule.forRoot(appRoutes),
    MatTableModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
