import { DisciplinesConfig } from 'src/app/models/discipline.model';
import { TablesConfig } from 'src/app/models/table.models';

import { campagne, campagneTables } from './campagne';
import { nature, natureTables } from './nature';

export const environment = {
  tables: <TablesConfig>{
    ...campagneTables,
    ...natureTables,
  },
  disciplines: <DisciplinesConfig>{
    campagne,
    nature,
  },
};
