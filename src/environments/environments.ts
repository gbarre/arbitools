import { DisciplinesConfig } from 'src/app/models/discipline.model';

import { campagne, scores_campagne } from './campagne';
import { nature } from './nature';
import { reglements_generaux } from './generaux';
import { tae } from './tae';
import { beursault } from './beursault';
import { salle, scores_salle } from './salle';
import { tir3D } from './tir3d';

export const environment = {
  disciplines: <DisciplinesConfig>{
    reglements_generaux,
    tae,
    beursault,
    salle,
    campagne,
    nature,
    tir3D,
  },
  scores: {
    scores_salle,
    scores_campagne,
  },
  spotTypes: ['monospot', 'trispot'],
};
