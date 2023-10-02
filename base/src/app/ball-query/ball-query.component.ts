import { Component } from '@angular/core';
import { knnQueryModel } from '../models/knnQuery.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { PatientModel } from '../models/patient.model';
import { BallQueryModel } from '../models/ballQuery.model';

@Component({
  selector: 'app-ball-query',
  templateUrl: './ball-query.component.html',
  styleUrls: ['./ball-query.component.css'],
})
export class BallQueryComponent {
  knnBForm!: FormGroup;
  public similar_patients$: PatientModel[] = [];
  common_level: string = '';
  common_percentage: number = 0;

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
      Radio: [null, [Validators.required, Validators.min(1), Validators.max(54)]],
    });
  }

  onSubmit(): void {
    if (this.knnBForm.valid) {
      const formData = this.knnBForm.value;
      let { Radio, Age, ...new_point } = formData;

      new_point = Object.values(new_point);

      const patientQuery = new PatientModel(Age, new_point);

      const NewKnnBQuery: BallQueryModel = new BallQueryModel (patientQuery, Radio);

      this.apiService.ballQuery(NewKnnBQuery).subscribe({
        next: (data) => {
          this.similar_patients$ = data;
          const levelCount: { [key: string]: number } = {
            'low': 0,
            'medium': 0,
            'high': 0
          };

          this.similar_patients$.forEach((patient) => {
            if (patient && patient.level) { // Asegurándonos de que 'patient' y 'patient.level' existen
              if (!levelCount[patient.level]) {
                levelCount[patient.level] = 0; // Inicializa si es la primera vez que se encuentra este 'level'
              }
              levelCount[patient.level] += 1;
            }
          });

          const levelKeys = Object.keys(levelCount);
          const levelValues = Object.values(levelCount);
          this.common_level = levelKeys[levelValues.indexOf(Math.max(...levelValues))];

          this.common_percentage = Math.max(...levelValues) / this.similar_patients$.length * 100;


        },
        error: (error) => {
          console.log('Error:', error);
        },
      });
    }
  }
}
