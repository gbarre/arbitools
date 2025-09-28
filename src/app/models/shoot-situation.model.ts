export interface SpottedArrow {
  value: number;
  spot: number;
  isLate: boolean;
}

export interface Arrow {
  value: number;
  isLate: boolean;
}

export interface SpottedShootSituation {
  arrows: SpottedArrow[];
  errors: {
    tooManyArrows: boolean;
    duplicateSpots: boolean;
  };
  lateWarningGiven: boolean;
}

export interface ShootSituation {
  arrows: Arrow[];
  errors: {
    tooManyArrows: boolean;
  };
  lateWarningGiven: boolean;
}

export interface ScoreResult {
  penaltyCount: number;
  retainedScore: number;
  retainedArrows: Arrow[] | SpottedArrow[];
}
