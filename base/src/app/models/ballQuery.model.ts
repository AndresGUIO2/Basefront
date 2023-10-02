import { PatientModel } from "./patient.model";


export class BallQueryModel {

    new_point: number[];
    radius: number;

    constructor(patient : PatientModel , radius: number) {
        this.new_point = [
            patient.AirPollution,
            patient.AlcoholUse,
            patient.DustAllergy,
            patient.OccupationalHazards,
            patient.GeneticRisk,
            patient.ChronicLungDisease,
            patient.BalancedDiet,
            patient.Obesity,
            patient.Smoking,
            patient.PassiveSmoker,
            patient.ChestPain,
            patient.CoughingOfBlood,
            patient.Fatigue,
            patient.WeightLoss,
            patient.ShortnessOfBreath,
            patient.Wheezing,
            patient.SwallowingDifficulty,
            patient.ClubbingOfFingerNails,
            patient.FrequentCold,
            patient.DryCough,
            patient.Snoring,
          ];
        this.radius = radius;
    }
}