import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PatientModel } from '../models/patient.model';
import { map, catchError } from 'rxjs/operators';
import { knnQueryModel } from '../models/knnQuery.model';
import { BallQueryModel } from '../models/ballQuery.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:8000'; // Cambia esto a la URL donde se aloja tu API de FastAPI

  constructor(private http: HttpClient) {}

  knnQuery(query: knnQueryModel): Observable<any> {
    const jsonQuery = JSON.stringify(query);
    console.log(query);
    return this.http.post<any[]>(`${this.baseUrl}/knn_query`, query).pipe(
      map(dataArray => dataArray.map(data => {
        const parsedData = typeof data === 'string' ? JSON.parse(data) : data;
        if (parsedData.characteristics) {
          return new PatientModel(
            parsedData.age,
            parsedData.characteristics,
            parsedData.index,
            parsedData.level,
          );
        } else {
          return new PatientModel(
            parsedData.age,
            [],
            parsedData.index,
            parsedData.level,
          );
        }
      })),
    )
  }

  ballQuery(query: BallQueryModel): Observable<any[]> {
    return this.http.post<any[]>(`${this.baseUrl}/ball_query`, query).pipe(
      map(dataArray => {
        return dataArray.map(data => {
          console.log(data);
          const parsedData = typeof data === 'string' ? JSON.parse(data) : data;
          if (parsedData.characteristics) {
            return new PatientModel(
              parsedData.age,
              parsedData.characteristics,
              parsedData.index,
              parsedData.level,
            );
          } else {
            return new PatientModel(
              parsedData.age,
              [],
              parsedData.index,
              parsedData.level,
            );
          }
        });
      }),
    );
  }

  getPatients(): Observable<PatientModel[]> {
    return this.http.get<any[]>(`${this.baseUrl}/patients`).pipe(
      map(dataArray => dataArray.map(data => {
        // Parsear si los datos son una cadena JSON.
        const parsedData = typeof data === 'string' ? JSON.parse(data) : data;
  
        if (parsedData.characteristics) {
          return new PatientModel(
            parsedData.age,
            parsedData.characteristics,
            parsedData.index,
            parsedData.level
          );
        } else {
          // manejar el caso cuando "characteristics" no está definido
          return new PatientModel(
            parsedData.age,
            [],
            parsedData.index,
            parsedData.level,
          );
        }
      })),
    catchError(error => { console.log('aiudaaaaa jelṕ'); throw error; })
    );
  }
  

  }
