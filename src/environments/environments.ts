import { TablesConfig } from 'src/app/models/table.models';
import { campagneTables } from './campagne';
import { natureTables } from './nature';

export const environment = {
  tables: <TablesConfig>{
    ...campagneTables,
    ...natureTables,
  },
};
