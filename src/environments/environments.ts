import { DisciplinesConfig } from 'src/app/models/discipline.model';

import { campagne } from './campagne';
import { nature } from './nature';
import { reglements_generaux } from './generaux';
import { tae } from './tae';
import { beursault } from './beursault';
import { salle } from './salle';

export const environment = {
  disciplines: <DisciplinesConfig>{
    reglements_generaux,
    tae,
    beursault,
    salle,
    campagne,
    nature,
  },
};
