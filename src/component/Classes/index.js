import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, } from '@mui/x-data-grid';
import { Stack } from '@mui/material';
import './index.scss';
import Loader from 'react-loaders'


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const columns: GridColDef[] = [
    { field: 'id', headerName: 'DAy', width: 140},

    { field: 'dayone', headerName: ' Sunday ', width: 130, },
    { field: 'daytwo', headerName: ' Monday ', width: 130, },
    { field: 'daythree', headerName: ' Tuesday ', width: 130, },
    { field: 'dayfoor', headerName: ' Wednesday ', width: 130, },
    { field: 'dayfive', headerName: ' Thursday ', width: 130, },
  
    { field: 'daysex', headerName: ' friday ', width: 130, },

    { field: 'dayseven', headerName: ' Saturday ', width: 130, },

    
    
 
  ];
  
  const rows = [
    { id:'06 am - 08 am',  dayone: ' Zumba - Karin', daytwo:'',daythree:'Spinning - Sarah' ,dayfoor:'',dayfive:'Spinning - Sarah',daysex:'',dayseven:'Spinning - Sarah'},
    { id: '08 am - 010 am', dayone: 'Bootcamp - Karin', daytwo:'',daythree:'' ,dayfoor:'Bootcamp - Karin',dayfive:'',daysex:'',dayseven:'Bootcamp - Karin' },
    { id:'10 am - 12 am', dayone: 'Zumba - Karin', daytwo:'yoga - rahmon',daythree:'' ,dayfoor:'',dayfive:'',daysex:'',dayseven:'' },
    { id: '12 am - 2 pm', dayone: '', daytwo:' Zumba - Karin',daythree:'' ,dayfoor:' Zumba - Karin',dayfive:'',daysex:'',dayseven:'' },
    { id: '2 pm - 4 pm', dayone: 'Zumba - Karin', daytwo:'',daythree:'Zumba - Karin' ,dayfoor:'',dayfive:'',daysex:'',dayseven:'' },
    { id: '2 pm - 4 pm', dayone: '', daytwo:'Yoga - Judi',daythree:'' ,dayfoor:'',dayfive:'',daysex:'',dayseven:''},
    { id: '2 pm - 4 pm', dayone: 'Yoga - Judi', daytwo:'',daythree:'' ,dayfoor:'Yoga - Judi',dayfive:'',daysex:'',dayseven:''},
  ];
  const rowses = [
    { id:'06 am - 08 am',  dayone: ' Zumba - Karin', daytwo:'Fit Camp - Nicole',daythree:'Spinning - Sarah' ,dayfoor:'',dayfive:'Spinning - Sarah',daysex:'',dayseven:'Spinning - Sarah'},
    { id: '08 am - 010 am', dayone: 'Bootcamp - Karin', daytwo:'Fit Camp - Nicole',daythree:'' ,dayfoor:'Bootcamp - Karin',dayfive:'',daysex:'',dayseven:'Bootcamp - Karin' },
    { id:'10 am - 12 am', dayone: 'Zumba - Karin', daytwo:'yoga - rahmon',daythree:'Kickboxing / Bootcamp - Vina' ,dayfoor:'',dayfive:'',daysex:'',dayseven:'' },
    { id: '12 am - 2 pm', dayone: '', daytwo:' Zumba - Karin',daythree:'' ,dayfoor:' Zumba - Karin',dayfive:'',daysex:'',dayseven:'' },
    { id: '2 pm - 4 pm', dayone: 'Zumba - Karin', daytwo:'Kickboxing / Bootcamp - Vina',daythree:'Zumba - Karin' ,dayfoor:'',dayfive:'',daysex:'',dayseven:'' },
    { id: '2 pm - 4 pm', dayone: 'Fit Camp - Nicole', daytwo:'Yoga - Judi',daythree:'' ,dayfoor:'',dayfive:'',daysex:'',dayseven:''},
    { id: '2 pm - 4 pm', dayone: 'Yoga - Judi', daytwo:'',daythree:'' ,dayfoor:'Yoga - Judi',dayfive:'',daysex:'',dayseven:''},
  ];
  const rowse = [
    { id:'06 am - 08 am',  dayone: ' Zumba - Karin', daytwo:'Power Circuit - Maribel',daythree:'Spinning - Sarah' ,dayfoor:'Power Circuit - Maribel',dayfive:'Spinning - Sarah',daysex:'',dayseven:'Spinning - Sarah'},
    { id: '08 am - 010 am', dayone: 'Bootcamp - Karin', daytwo:'',daythree:'' ,dayfoor:'Bootcamp - Karin',dayfive:'',daysex:'',dayseven:'Bootcamp - Karin' },
    { id:'10 am - 12 am', dayone: 'Zumba - Karin', daytwo:'yoga - rahmon',daythree:'Abs & Glutes - Maribel' ,dayfoor:'',dayfive:'Power Circuit - Maribel',daysex:'',dayseven:'' },
    { id: '12 am - 2 pm', dayone: '', daytwo:' Zumba - Karin',daythree:'H.I.I.T. - Mirabel' ,dayfoor:' Zumba - Karin',dayfive:'Abs & Glutes - Maribel',daysex:'',dayseven:'' },
    { id: '2 pm - 4 pm', dayone: 'Zumba - Karin', daytwo:'',daythree:'Zumba - Karin' ,dayfoor:'',dayfive:'',daysex:'',dayseven:'' },
    { id: '2 pm - 4 pm', dayone: '', daytwo:'Yoga - Judi',daythree:'' ,dayfoor:'',dayfive:'',daysex:'',dayseven:''},
    { id: '2 pm - 4 pm', dayone: 'Yoga - Judi', daytwo:'',daythree:'H.I.I.T. - Mirabel' ,dayfoor:'Yoga - Judi',dayfive:'',daysex:'',dayseven:''},
  ];
 

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Classes() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (

    <>
         <Stack className='classes' >
         <Typography variant="h5" fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        our classes
      </Typography>
         <Box sx={{ width: '100%' }}>

     
     <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
       <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
         <Tab label="(ca)-land park" {...a11yProps(0)} />
         <Tab label="(ca)-lodi" {...a11yProps(1)} />
         <Tab label="(ca)-West Sacramento" {...a11yProps(2)} />
       </Tabs>
     </Box>
     <TabPanel value={value} index={0}>
     <div style={{ height: 400, width: '100%' }}>
     <DataGrid
       rows={rows}
       columns={columns}
       pageSize={7}
       rowsPerPageOptions={[7]}
       
     />
   </div>
     </TabPanel>
     <TabPanel value={value} index={1}>
     <div style={{ height: 400, width: '100%' }}>
     <DataGrid
       rows={rowses}
       columns={columns}
       pageSize={7}
       rowsPerPageOptions={[7]}
       
     />
   </div>
     </TabPanel>
     <TabPanel value={value} index={2}>
     <div style={{ height: 400, width: '100%' }}>
     <DataGrid
       rows={rowse}
       columns={columns}
       pageSize={7}
       rowsPerPageOptions={[7]}
       
     />
   </div>      </TabPanel>
   </Box>
         </Stack>

            
    
         <Loader type="pacman" />

    </>
  );
}
