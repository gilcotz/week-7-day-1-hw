import React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
// export const DataTable = () => {
    
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'car',
          headerName: 'Car Name',
          width: 180,
          editable: true,
        },
        {
          field: 'BrandName',
          headerName: 'Brand',
          width: 150,
          editable: true,
        },
        {
          field: 'JapaneseName',
          headerName: 'Brand name in Japanese',
          width: 295,
          editable: true,
        },
        {
          field: 'NickName',
          headerName: 'Known as',
          width: 225,
          editable: true,
        },
        {
          field: 'carBrandName',
          headerName: 'Name and brand',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 220,
          valueGetter: (params: GridValueGetterParams) =>
            `${params.getValue(params.id, 'BrandName') || ''} ${
              params.getValue(params.id, 'car') || ''
            }`,
        },
      ];
      
      const rows = [
        { id: 1, car: 'Skyline R-34', BrandName: 'Nissan', JapaneseName: '日産', NickName: 'Godzilla' },
        { id: 2, car: 'Supra', BrandName: 'Toyota', JapaneseName: 'トヨタ', NickName: 'MK4'},
        { id: 3, car: 'RX-7', BrandName: 'Mazda', JapaneseName: 'マツダ', NickName: 'FD' },
        { id: 4, car: 'WRX STI', BrandName: 'Subaru', JapaneseName: 'スバル', NickName: 'Scooby'},
        { id: 5, car: 'Silvia', BrandName: 'Nissan', JapaneseName: '日産', NickName: 'S14'},
        { id: 6, car: 'NSX', BrandName: 'Honda', JapaneseName: ' 本田', NickName: ' NSX'},
        { id: 7, car: 'Miata', BrandName: 'Mazda', JapaneseName: 'マツダ', NickName: '50/50'},
        { id: 8, car: 'Eclipse', BrandName: 'Mitsubishi', JapaneseName: '三菱自', NickName: 'Ring of Fire'},
        { id: 9, car: 'Lancer Evolution', BrandName: 'Mitsubishi', JapaneseName: '三菱自', NickName: 'EVO'},
        { id: 10, car: 'IS500', BrandName: 'Lexus', JapaneseName: 'レクサス,', NickName: 'Sleeper' },

      ];


      export const DataTable= () => {
        return (
          <div style={{ height: 700, width: '100%' }}>
              <h2>  Car Inventory</h2>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={rows.length}
              checkboxSelection
            />
          </div>
        );
      }