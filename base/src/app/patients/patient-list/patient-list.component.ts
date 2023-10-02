import { Component, Input } from '@angular/core';
import { PatientModel } from 'src/app/models/patient.model';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent {
  @Input() patients: PatientModel[] = [];


  ngOnInit(): void {
    console.log(this.patients);

  }
  
}