import { ArrowUpTrayIcon } from '@heroicons/react/24/solid';
import { Switch } from '@mui/material';
import DataTable from '../components/Table';
import BasicSelect from '../components/Select';
import CustomSeparator from '../components/Bread';
import FileExplorer from '../components/Gpt';
export const label = { inputProps: { 'aria-label': 'Switch demo' } };

const jsonData = {
  app: {
    type: 'folder',
    children: [
      {
        file1: {
          type: 'file',
          size: '106.56MB',
        },
        file2: {
          type: 'file',
          size: '106.56MB',
        },
        main: {
          type: 'folder',
          children: [
            {
              src: {
                type: 'folder',
                children: [
                  {
                    file3: {
                      type: 'file',
                      size: '106.56MB',
                    },
                    file4: {
                      type: 'file',
                      size: '106.56MB',
                    },
                  },
                ],
              },
            },
          ],
        },
        components: {
          type: 'folder',
          children: [
            {
              file5: {
                type: 'file',
                size: '106.56MB',
              },
              file6: {
                type: 'file',
                size: '106.56MB',
              },
            },
          ],
        },
      },
    ],
  },
};

console.log(jsonData.app.children)
export default function HomePage() {
  return (
    <main className='min-h-screen bg-slate-100 p-4'>
      <section className='bg-white px-5 py-5 rounded-lg shadow-md min-h-screen'>
        {/* <h1 className='text-xl font-semibold m-2 pl-3'>Root Directory</h1> */}
        <CustomSeparator />
        <hr className='h-0.5 bg-slate-400' />

        <div className='p-4 flex items-center justify-between'>
          <div className='p-4 flex items-center space-x-5'>
          <ArrowUpTrayIcon className='w-5' />
          <span>Keep Local Path</span>
          <Switch {...label} defaultChecked />
          <span>Auto-Sync</span>
          <BasicSelect /></div>
          
          <input className='px-2' placeholder='search Name/Job ID' />
        </div>

        {/* <DataTable /> */}
        <FileExplorer data={jsonData.app.children} />
      </section>
    </main>
  );
}
