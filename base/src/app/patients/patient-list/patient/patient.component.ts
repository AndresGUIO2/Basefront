import { Component, Input } from '@angular/core';
import { PatientModel } from 'src/app/models/patient.model';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  @Input() patient: PatientModel | undefined;

  ngOnInit(): void {
    console.log(this.patient);

  }
  
}
