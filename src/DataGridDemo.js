import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { data } from './data';

const columns: GridColDef[] = [
  { field: 'id', headerName:'ISIN', width: 100 },
  { 
    field: 'SYMBOL', 
    headerName: 'SYMBOL', 
    width: 150,
  },
  {
    field: 'SERIES',
    headerName: 'Series',
    width: 65,
  },
  {
    field: 'OPEN',
    headerName: 'OPEN',
    type: 'number',
    width: 100,
  },
  {
    field: 'HIGH',
    headerName: 'HIGH',
    type: 'number',
    width: 100,
  },
  {
    field: 'LOW',
    headerName: 'LOW',
    type: 'number',
    sortable: false,
    width: 100,
  },
  {
    field: 'LAST',
    headerName: 'LAST',
    type: 'number',
    width: 100,
  },
  {
    field: 'PREVCLOSE',
    headerName: 'PREVCLOSE',
    type: 'number',
    width: 100,
  },
  {
    field: 'TOTTRDQTY',
    headerName: 'TOTTRDQTY',
    type: 'number',
    width: 100,
  },
  {
    field: 'TOTTRDVAL',
    headerName: 'TOTTRDVAL',
    type: 'number',
    width: 100,
  },
  {
    field: 'TIMESTAMP',
    headerName: 'TIMESTAMP',
    width: 120,
  },
  {
    field: 'TOTALTRADES',
    headerName: 'TOTALTRADES',
    type: 'number',
    width: 100,
  },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}