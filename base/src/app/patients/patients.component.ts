import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { OnInit } from '@angular/core';
import { PatientModel } from '../models/patient.model';
import { knnQueryModel } from '../models/knnQuery.model';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit{
  public patients$: PatientModel[] = [];
  advance: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPatients().subscribe({
      next: data => {
        this.patients$ = data;
      },
      error: error => {
        console.log('Error:', error);
      }
    });
  }

  knnQuery(): void {
    console.log('knnQuery');
  }


}

