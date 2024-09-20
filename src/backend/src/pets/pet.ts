interface Pet{
  name: string;
  surnames: string[];
  strikes: number;
  heath: number;
  hunger: number;
  happyness: number;
  energy: number;
  stage: stage;
  race: string;
  genes: string[];
  parents: string[];
  children: string[];
  points: number;
  special_trates: string[];
  modifiers: string[];
}

enum stage {
  "EGG",
  "BABY",
  "YUNG",
  "ADULT",
  "DEAD"    // :c
}
