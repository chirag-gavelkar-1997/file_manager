import { DataGrid } from '@mui/x-data-grid';
import { label } from '../pages/HomePage';
import { Switch } from '@mui/material';

const FileExplorer = ({ data }) => {
  flattenData(data);
  const rows = [
    {
      id: 'app/file1',
      name: 'file1',
      type: 'File',
      size: '106.56MB',
    },
    {
      id: 'app/file2',
      name: 'file2',
      type: 'File',
      size: '106.56MB',
    },
    {
      id: 'app/main/src/file3',
      name: 'file3',
      type: 'File',
      size: '106.56MB',
    },
    {
      id: 'app/main/src/file4',
      name: 'file4',
      type: 'File',
      size: '106.56MB',
    },
    {
      id: 'app/components/file5',
      name: 'file5',
      type: 'File',
      size: '106.56MB',
    },
    {
      id: 'app/components/file6',
      name: 'file6',
      type: 'File',
      size: '106.56MB',
    },
  ];
  console.log('Rows:', rows);

  const columns = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'type', headerName: 'Type', width: 200 },
    { field: 'size', headerName: 'Size', width: 200 },
    { field: 'id', headerName: 'MODIFIED DATE/TI...', width: 200 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
      />
    </div>
  );
};

export default FileExplorer;

const flattenData = (data) => {
  const result = [];

  for (const folderName in data) {
    const folder = data[folderName];
    console.log(folder);
  }

  return result;
};
