import * as React from 'react';
import {DataTable} from 'react-native-paper';

const DatatableCell = () => (
  <DataTable.Row>
    <DataTable.Cell numeric>1</DataTable.Cell>
    <DataTable.Cell numeric>2</DataTable.Cell>
    <DataTable.Cell numeric>3</DataTable.Cell>
    <DataTable.Cell numeric>4</DataTable.Cell>
  </DataTable.Row>
);

export default DatatableCell;
