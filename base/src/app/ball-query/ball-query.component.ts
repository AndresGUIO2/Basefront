import { Component } from '@angular/core';
import { knnQueryModel } from '../models/knnQuery.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { PatientModel } from '../models/patient.model';

@Component({
  selector: 'app-ball-query',
  templateUrl: './ball-query.component.html',
  styleUrls: ['./ball-query.component.css'],
})
export class BallQueryComponent {
  knnBForm!: FormGroup;
  public similar_patients$: PatientModel[] = [];

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.knnBForm = this.fb.group({
      Age: [
        null,
        [Validators.required, Validators.min(1), Validators.max(100)],
      ],
      AirPollution: [
        null,
        [Validators.required, Validators.min(1), Validators.max(9)],
      ],
      AlcoholUse: [
        null,
        [Validators.required, Validators.min(1), Validators.max(9)],
      ],
      DustAllergy: [
        null,
        [Validators.required, Validators.min(1), Validators.max(9)],
      ],
      OccuPationalHazards: [
        null,
        [Validators.required, Validators.min(1), Validators.max(9)],
      ],
      GeneticRisk: [
        null,
        [Validators.required, Validators.min(1), Validators.max(9)],
      ],
      ChronicLungDisease: [
        null,
        [Validators.required, Validators.min(1), Validators.max(9)],
      ],
      BalancedDiet: [
        null,
        [Validators.required, Validators.min(1), Validators.max(9)],
      ],
      Obesity: [
        null,
        [Validators.required, Validators.min(1), Validators.max(9)],
      ],
      Smoking: [
        null,
        [Validators.required, Validators.min(1), Validators.max(9)],
      ],
      PassiveSmoker: [
        null,
        [Validators.required, Validators.min(1), Validators.max(9)],
      ],
      ChestPain: [
        null,
        [Validators.required, Validators.min(1), Validators.max(9)],
      ],
      CoughingOfBlood: [
        null,
        [Validators.required, Validators.min(1), Validators.max(9)],
      ],
      Fatigue: [
        null,
        [Validators.required, Validators.min(1), Validators.max(9)],
      ],
      WeightLoss: [
        null,
        [Validators.required, Validators.min(1), Validators.max(9)],
      ],
      ShortnessOfBreath: [
        null,
        [Validators.required, Validators.min(1), Validators.max(9)],
      ],
      Wheezing: [
        null,
        [Validators.required, Validators.min(1), Validators.max(9)],
      ],
      SwallowingDifficulty: [
        null,
        [Validators.required, Validators.min(1), Validators.max(9)],
      ],
      ClubbingOfFingerNails: [
        null,
        [Validators.required, Validators.min(1), Validators.max(9)],
      ],
      FrequentCold: [
        null,
        [Validators.required, Validators.min(1), Validators.max(9)],
      ],
      DryCough: [
        null,
        [Validators.required, Validators.min(1), Validators.max(9)],
      ],
      Snoring: [
        null,
        [Validators.required, Validators.min(1), Validators.max(9)],
      ],
      r: [null, [Validators.required, Validators.min(1), Validators.max(54)]],
    });
  }

  onSubmit(): void {
    if (this.knnBForm.valid) {
      const formData = this.knnBForm.value;
      let { r, Age, ...new_point } = formData;

      new_point = Object.values(new_point);

      const patientQuery = new PatientModel(Age, new_point);

      const NewKnnQuery: knnQueryModel = new knnQueryModel(patientQuery, r);

      this.apiService.knnQuery(NewKnnQuery).subscribe({
        next: (data) => {
          this.similar_patients$ = data;
        },
        error: (error) => {
          console.log('Error:', error);
        },
      });
    }
  }
}
