export class PatientModel {
    public index: string | undefined;
    public age: number;
    public level: string | undefined;
    public AirPollution: number;
    public AlcoholUse: number;
    public DustAllergy: number;
    public OccupationalHazards: number;
    public GeneticRisk: number;
    public ChronicLungDisease: number;
    public BalancedDiet: number;
    public Obesity: number;
    public Smoking: number;
    public PassiveSmoker: number;
    public ChestPain: number;
    public CoughingOfBlood: number;
    public Fatigue: number;
    public WeightLoss: number;
    public ShortnessOfBreath: number;
    public Wheezing: number;
    public SwallowingDifficulty: number;
    public ClubbingOfFingerNails: number;
    public FrequentCold: number;
    public DryCough: number;
    public Snoring: number;

    constructor( age: number, characteristics: number[], index?: string, level?: string,) {
        this.index = index;
        this.age = age;
        this.level = level;

        //characteristics
        this.AirPollution = characteristics[0]; 
        this.AlcoholUse = characteristics[1];
        this.DustAllergy = characteristics[2];
        this.OccupationalHazards = characteristics[3];
        this.GeneticRisk = characteristics[4];
        this.ChronicLungDisease = characteristics[5];
        this.BalancedDiet = characteristics[6];
        this.Obesity = characteristics[7];
        this.Smoking = characteristics[8];
        this.PassiveSmoker = characteristics[9];
        this.ChestPain = characteristics[10];
        this.CoughingOfBlood = characteristics[11];
        this.Fatigue = characteristics[12];
        this.WeightLoss = characteristics[13];
        this.ShortnessOfBreath = characteristics[14];
        this.Wheezing = characteristics[15];
        this.SwallowingDifficulty = characteristics[16];
        this.ClubbingOfFingerNails = characteristics[17];
        this.FrequentCold = characteristics[18];
        this.DryCough = characteristics[19];
        this.Snoring = characteristics[20];
    }

    getCharacteristics(): number[] {
        return [
            this.AirPollution,
            this.AlcoholUse,
            this.DustAllergy,
            this.OccupationalHazards,
            this.GeneticRisk,
            this.ChronicLungDisease,
            this.BalancedDiet,
            this.Obesity,
            this.Smoking,
            this.PassiveSmoker,
            this.ChestPain,
            this.CoughingOfBlood,
            this.Fatigue,
            this.WeightLoss,
            this.ShortnessOfBreath,
            this.Wheezing,
            this.SwallowingDifficulty,
            this.ClubbingOfFingerNails,
            this.FrequentCold,
            this.DryCough,
            this.Snoring,
        ];
    }
}
