export interface Arrow {
  value: number;
  spot: number;
  isLate: boolean;
}

export interface ShootSituation {
  arrows: Arrow[];
  errors: {
    tooManyArrows: boolean;
    duplicateSpots: boolean;
  };
  lateWarningGiven: boolean;
}

export interface ScoreResult {
  penaltyCount: number;
  retainedScore: number;
  retainedArrows: Arrow[];
}
